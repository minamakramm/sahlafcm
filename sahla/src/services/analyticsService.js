import { supabase } from '@/lib/supabase';

// Average estimated row sizes in bytes (based on typical Supabase/Postgres row overhead)
const AVG_ROW_BYTES = {
  analytics_events: 350,   // event_type, event_data (jsonb), session_id, user_id, url, timestamps
  profiles: 280,           // id, full_name, email, avatar_url, role, bio, timestamps
  exam_attempts: 400,      // user_id, subject, score, answers (jsonb), timestamps
  lecture_progress: 200,   // user_id, lecture_id, completed, timestamps
  bookmarks: 180,          // user_id, lecture_id, timestamps
  feedback: 300,           // user_id, message, rating, timestamps
  notifications: 320,      // title, body, target_user_id, type, timestamps
  feature_requests: 350,   // user_id, title, description, status, timestamps
};

export const analyticsService = {
  fetchAnalytics: async (forceRefresh = false) => {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    // ── 1. Fetch row counts from ALL tables in parallel ──
    const [
      { count: analyticsCount },
      { count: profilesCount },
      { count: examAttemptsCount },
      { count: lectureProgressCount },
      { count: bookmarksCount },
      { count: feedbackCount },
      { count: notificationsCount },
      { count: featureRequestsCount },
      { data: recentEvents },
      { data: topUserEvents },
      { data: recentProfiles }
    ] = await Promise.all([
      supabase.from('analytics_events').select('*', { count: 'exact', head: true }),
      supabase.from('profiles').select('*', { count: 'exact', head: true }),
      supabase.from('exam_attempts').select('*', { count: 'exact', head: true }),
      supabase.from('lecture_progress').select('*', { count: 'exact', head: true }),
      supabase.from('bookmarks').select('*', { count: 'exact', head: true }),
      supabase.from('feedback').select('*', { count: 'exact', head: true }),
      supabase.from('notifications').select('*', { count: 'exact', head: true }),
      supabase.from('feature_requests').select('*', { count: 'exact', head: true }),
      // Recent events for DAU / activity calculations
      supabase
        .from('analytics_events')
        .select('user_id, created_at, session_id')
        .gte('created_at', sevenDaysAgo.toISOString()),
      // Per-user event counts for "top accounts" (last 7 days with user_id)
      supabase
        .from('analytics_events')
        .select('user_id, created_at')
        .gte('created_at', sevenDaysAgo.toISOString())
        .not('user_id', 'is', null),
      // Profile data for display names
      supabase
        .from('profiles')
        .select('id, full_name, avatar_url, updated_at')
        .order('updated_at', { ascending: false })
        .limit(50)
    ]);

    const events = recentEvents || [];
    const totalUsers = profilesCount || 0;

    // ── 2. Real table sizes (row count × estimated row bytes) ──
    const tableCounts = {
      analytics_events: analyticsCount || 0,
      profiles: profilesCount || 0,
      exam_attempts: examAttemptsCount || 0,
      lecture_progress: lectureProgressCount || 0,
      bookmarks: bookmarksCount || 0,
      feedback: feedbackCount || 0,
      notifications: notificationsCount || 0,
      feature_requests: featureRequestsCount || 0,
    };

    const topTables = Object.entries(tableCounts)
      .map(([name, count]) => ({
        name,
        rows: count,
        size_bytes: count * (AVG_ROW_BYTES[name] || 256)
      }))
      .sort((a, b) => b.size_bytes - a.size_bytes);

    const totalDbBytes = topTables.reduce((sum, t) => sum + t.size_bytes, 0);
    const DB_LIMIT = 500 * 1024 * 1024; // 500 MB free tier

    // ── 3. Real active users (7d) ──
    const activeUserIds = new Set(events.filter(e => e.user_id).map(e => e.user_id));
    const activeUsersCount = activeUserIds.size;
    const inactiveUsersCount = Math.max(0, totalUsers - activeUsersCount);

    // ── 4. Real DAU by day (last 7 days) ──
    const dauByDay = {};
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      dauByDay[d.toISOString().split('T')[0]] = { users: new Set(), events: 0 };
    }

    events.forEach(e => {
      if (!e.created_at) return;
      const dayStr = new Date(e.created_at).toISOString().split('T')[0];
      if (dauByDay[dayStr]) {
        dauByDay[dayStr].users.add(e.user_id || e.session_id || 'anon');
        dauByDay[dayStr].events++;
      }
    });

    // Build forecast with real daily event counts (proxy for DB growth)
    const sortedDays = Object.keys(dauByDay).sort();
    let cumulativeDbEstimate = totalDbBytes;
    const realForecast = sortedDays.map((dayStr, index) => {
      const dayData = dauByDay[dayStr];
      const dailyNewBytes = dayData.events * AVG_ROW_BYTES.analytics_events;
      // Running estimate: subtract later days' contributions to show growth
      const dbAtDay = totalDbBytes - sortedDays.slice(index + 1).reduce(
        (s, d) => s + dauByDay[d].events * AVG_ROW_BYTES.analytics_events, 0
      );
      return {
        date: new Date(dayStr).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
        db: Math.max(0, dbAtDay),
        storage: 0, // No Supabase Storage used
        active_users: dayData.users.size,
        events: dayData.events
      };
    });

    // ── 5. Real top accounts by activity ──
    const userEventCounts = {};
    (topUserEvents || []).forEach(e => {
      if (!e.user_id) return;
      userEventCounts[e.user_id] = (userEventCounts[e.user_id] || 0) + 1;
    });

    const profileMap = {};
    (recentProfiles || []).forEach(p => { profileMap[p.id] = p; });

    const totalActivityEvents = Object.values(userEventCounts).reduce((s, c) => s + c, 0);

    const realTopAccounts = Object.entries(userEventCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([userId, eventCount]) => {
        const profile = profileMap[userId] || {};
        const userDbBytes = eventCount * AVG_ROW_BYTES.analytics_events;
        return {
          id: userId,
          name: profile.full_name || 'Unknown User',
          avatar_url: profile.avatar_url || null,
          storage_bytes: userDbBytes,
          total_files: eventCount, // "files" = events generated
          pct_usage: totalActivityEvents > 0 ? (eventCount / totalActivityEvents) * 100 : 0,
          last_active: profile.updated_at
        };
      });

    // ── 6. Compute averages ──
    const avgUserBytes = totalUsers > 0 ? totalDbBytes / totalUsers : 0;
    const avgUserMB = avgUserBytes / (1024 * 1024);
    const estMaxUsers = avgUserBytes > 0 ? Math.floor(DB_LIMIT / avgUserBytes) : 999;

    return {
      database: {
        sizeBytes: totalDbBytes,
        limitBytes: DB_LIMIT,
        usagePct: (totalDbBytes / DB_LIMIT) * 100,
        avgUserMB,
        estMaxUsers,
        tableCount: Object.keys(tableCounts).length
      },
      storage: {
        totalBytes: 0,          // No Supabase Storage used
        limitBytes: 1024 * 1024 * 1024,
        freeTierPct: 0,
        fileCount: 0,
        avgFileBytes: 0,
        largestUserPct: 0
      },
      charts: {
        healthMap: {
          active_users: activeUsersCount,
          inactive_users: inactiveUsersCount
        },
        forecast: realForecast
      },
      topAccounts: realTopAccounts,
      topTables
    };
  }
};

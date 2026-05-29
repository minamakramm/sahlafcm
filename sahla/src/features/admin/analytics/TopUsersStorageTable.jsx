import React, { memo } from 'react';
import { formatBytes } from '../../../utils/capacityCalculator';
import { Users, AlertTriangle, ArrowDown, Activity } from 'lucide-react';

export const TopUsersStorageTable = memo(({ users }) => {
  if (!users || users.length === 0) {
    return (
      <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center min-h-[200px]">
        <Activity className="w-8 h-8 text-gray-600 mb-3" />
        <p className="text-sm text-gray-500 font-medium">No activity detected</p>
        <p className="text-xs text-gray-600 mt-1">Activity data will appear here once students start using the platform.</p>
      </div>
    );
  }

  const maxBytes = Math.max(...users.map(u => u.storage_bytes || 0));

  return (
    <div className="w-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
      <div className="p-6 border-b border-white/5 flex items-center justify-between">
        <div>
          <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest">Most Active Users</h3>
          <p className="text-[11px] text-gray-600 mt-0.5">Activity distribution (last 7 days)</p>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-gray-600">
          <ArrowDown className="w-3 h-3" /> Sorted by usage
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white/[0.02] text-[10px] uppercase font-bold text-gray-500 tracking-widest">
              <th className="px-6 py-3.5">User</th>
              <th className="px-6 py-3.5 text-right">Events</th>
              <th className="px-6 py-3.5">Usage</th>
              <th className="px-6 py-3.5 text-right">Share</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {users.map((user, idx) => {
               const isHeavy = user.pct_usage > 5.0;
               const barWidth = maxBytes > 0 ? (user.storage_bytes / maxBytes * 100) : 0;
               return (
                <tr key={user.id || idx} className="hover:bg-white/[0.03] transition-colors">
                  <td className="px-6 py-3.5 flex items-center gap-3">
                    <div className="relative">
                      <img
                        src={user.avatar_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name||'A')}&background=6366f1&color=fff&bold=true`}
                        alt=""
                        className="w-8 h-8 rounded-full bg-white/10 ring-2 ring-white/10"
                      />
                      {idx < 3 && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary text-white text-[8px] font-black flex items-center justify-center shadow">
                          {idx + 1}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white text-sm">{user.name || 'Unknown'}</span>
                      {isHeavy && (
                        <span className="px-1.5 py-0.5 bg-rose-500/10 text-rose-400 text-[9px] rounded font-black uppercase flex items-center gap-0.5 border border-rose-500/20">
                          <AlertTriangle className="w-2.5 h-2.5" /> Heavy
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-3.5 text-right text-sm text-gray-400 font-mono">
                    {(user.total_files || 0).toLocaleString()}
                  </td>
                  <td className="px-6 py-3.5 min-w-[140px]">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-700 ${isHeavy ? 'bg-gradient-to-r from-rose-400 to-rose-500' : 'bg-gradient-to-r from-primary to-accent'}`}
                          style={{ width: `${barWidth}%` }}
                        />
                      </div>
                      <span className="text-xs font-mono text-gray-300 font-medium min-w-[60px] text-right">
                        {formatBytes(user.storage_bytes)}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-3.5 text-right">
                     <span className={`text-sm font-mono font-bold ${isHeavy ? 'text-rose-400' : 'text-primary'}`}>
                        {Number(user.pct_usage).toFixed(1)}%
                     </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
});

TopUsersStorageTable.displayName = 'TopUsersStorageTable';

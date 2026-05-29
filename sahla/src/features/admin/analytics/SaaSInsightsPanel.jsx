import React, { memo } from 'react';
import { Lightbulb, AlertTriangle, TrendingUp, Database, HardDrive, Users, Activity } from 'lucide-react';
import { extractTextualInsights } from '../../../utils/growthPrediction';

export const SaaSInsightsPanel = memo(({ analyticsData }) => {
  if (!analyticsData) return null;

  const insights = extractTextualInsights(analyticsData);

  const iconMap = {
    'database': Database,
    'storage': HardDrive,
    'users': Users,
    'growth': TrendingUp,
    'activity': Activity,
    'warning': AlertTriangle,
  };

  if (insights.length === 0) {
    return (
      <div className="w-full h-full bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center">
        <Activity className="w-8 h-8 text-gray-600 mb-3" />
        <p className="text-sm text-gray-500 font-medium">Collecting intelligence data...</p>
        <p className="text-xs text-gray-600 mt-1">Insights appear after analytics crunch.</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col hover:border-white/20 transition-all duration-500">
      <div className="flex items-center gap-2 mb-5">
        <Lightbulb className="w-5 h-5 text-primary" />
        <div>
          <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest">Platform Intelligence</h3>
          <p className="text-[10px] text-gray-600">Auto-generated insights</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto space-y-2.5 custom-scrollbar">
        {insights.map((insight, idx) => {
          const IconComponent = iconMap[insight.icon] || Activity;
          return (
            <div
              key={idx}
              className={`flex items-start gap-3 p-3.5 rounded-xl transition-all duration-300 ${
                insight.alert
                  ? 'bg-rose-500/5 border border-rose-500/10'
                  : 'bg-white/[0.03] border border-white/5'
              }`}
            >
              <div className={`p-1.5 rounded-lg flex-shrink-0 mt-0.5 ${
                insight.alert ? 'bg-rose-500/10 text-rose-400' : 'bg-primary/10 text-primary'
              }`}>
                <IconComponent className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase font-bold text-gray-500 tracking-widest mb-0.5">{insight.label}</p>
                <p className={`text-sm font-semibold leading-snug ${
                  insight.alert ? 'text-rose-400' : 'text-white'
                }`}>
                  {insight.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

SaaSInsightsPanel.displayName = 'SaaSInsightsPanel';

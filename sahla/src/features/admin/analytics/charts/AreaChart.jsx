import React, { memo } from 'react';
import { AreaChart as ReAreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { formatBytes } from '../../../../utils/capacityCalculator';
import { Activity } from 'lucide-react';

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload) return null;
  return (
    <div className="bg-black/90 backdrop-blur-sm px-4 py-3 rounded-xl shadow-xl border border-white/10">
      <p className="text-xs font-bold text-gray-400 mb-1.5">{label}</p>
      {payload.map((entry, idx) => (
        <p key={idx} className="text-sm font-semibold" style={{ color: entry.color }}>
          {entry.name}: {formatBytes(entry.value)}
        </p>
      ))}
    </div>
  );
};

export const AreaChart = memo(({ data, dataKey = 'db', secondaryKey, nameKey = 'date', title }) => {
  const hasData = data && data.length > 0;

  return (
    <div className="w-full h-80 bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-500">
      <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-4">{title}</h3>
      {hasData ? (
        <div className="w-full h-60">
          <ResponsiveContainer width="100%" height="100%">
            <ReAreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="gradientPrimary" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="gradientSecondary" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff" strokeOpacity={0.05} />
              <XAxis dataKey={nameKey} tick={{ fontSize: 11, fill: '#6b7280' }} axisLine={false} tickLine={false} />
              <YAxis tickFormatter={(val) => formatBytes(val, 0)} tick={{ fontSize: 11, fill: '#6b7280' }} width={70} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey={dataKey} name="Database" stroke="#8b5cf6" strokeWidth={2.5} fillOpacity={1} fill="url(#gradientPrimary)" dot={false} activeDot={{ r: 5, fill: '#8b5cf6', stroke: '#000', strokeWidth: 2 }} />
              {secondaryKey && (
                <Area type="monotone" dataKey={secondaryKey} name="Storage" stroke="#06b6d4" strokeWidth={2.5} fillOpacity={1} fill="url(#gradientSecondary)" dot={false} activeDot={{ r: 5, fill: '#06b6d4', stroke: '#000', strokeWidth: 2 }} />
              )}
            </ReAreaChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <div className="w-full h-60 flex flex-col items-center justify-center">
          <Activity className="w-8 h-8 text-gray-600 mb-3" />
          <p className="text-sm text-gray-500 font-medium">No trajectory data yet</p>
          <p className="text-xs text-gray-600 mt-1">Deploy the daily snapshot Edge Function to populate this chart.</p>
        </div>
      )}
    </div>
  );
});

AreaChart.displayName = 'AdminAreaChart';

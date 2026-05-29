import React, { memo } from 'react';
import { LineChart as ReLineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Activity } from 'lucide-react';

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload) return null;
  return (
    <div className="bg-black/90 backdrop-blur-sm px-4 py-3 rounded-xl shadow-xl border border-white/10">
      <p className="text-xs font-bold text-gray-400 mb-1">{label}</p>
      {payload.map((entry, idx) => (
        <p key={idx} className="text-sm font-semibold" style={{ color: entry.color }}>
          {entry.name}: {entry.value?.toLocaleString()}
        </p>
      ))}
    </div>
  );
};

export const LineChart = memo(({ data, dataKey = 'users', nameKey = 'date', title }) => {
  const hasData = data && data.length > 0;

  return (
    <div className="w-full h-72 bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-500">
      <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-4">{title}</h3>
      {hasData ? (
        <div className="w-full h-52">
          <ResponsiveContainer width="100%" height="100%">
            <ReLineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff" strokeOpacity={0.05} />
              <XAxis dataKey={nameKey} tick={{ fontSize: 11, fill: '#6b7280' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#6b7280' }} allowDecimals={false} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Line type="monotone" dataKey={dataKey} name="Active Users" stroke="#f43f5e" strokeWidth={2.5} dot={{ r: 4, fill: '#f43f5e', stroke: '#000', strokeWidth: 2 }} activeDot={{ r: 6, fill: '#f43f5e', stroke: '#000', strokeWidth: 2 }} />
            </ReLineChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <div className="w-full h-52 flex flex-col items-center justify-center">
          <Activity className="w-6 h-6 text-gray-600 mb-2" />
          <p className="text-xs text-gray-500">Awaiting snapshot data</p>
        </div>
      )}
    </div>
  );
});

LineChart.displayName = 'AdminLineChart';

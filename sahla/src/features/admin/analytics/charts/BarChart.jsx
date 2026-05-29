import React, { memo } from 'react';
import { BarChart as ReBarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { formatBytes } from '../../../../utils/capacityCalculator';

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload) return null;
  return (
    <div className="bg-black/90 backdrop-blur-sm px-4 py-3 rounded-xl shadow-xl border border-white/10">
      <p className="text-xs font-bold text-gray-400 mb-1">{label}</p>
      <p className="text-sm font-semibold text-primary">{formatBytes(payload[0]?.value)}</p>
    </div>
  );
};

const GRADIENT_COLORS = ['#7c3aed', '#8b5cf6', '#a78bfa', '#c4b5fd', '#ddd6fe', '#6366f1', '#818cf8', '#a5b4fc'];

export const BarChart = memo(({ data, dataKey = 'size_bytes', nameKey = 'name', title }) => {
  return (
    <div className="w-full h-72 bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-500">
      <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-4">{title}</h3>
      <div className="w-full h-52">
        <ResponsiveContainer width="100%" height="100%">
          <ReBarChart data={data} layout="vertical" margin={{ top: 0, right: 20, left: 10, bottom: 0 }}>
            <XAxis type="number" tickFormatter={(val) => formatBytes(val, 0)} tick={{ fontSize: 10, fill: '#6b7280' }} axisLine={false} tickLine={false} />
            <YAxis type="category" dataKey={nameKey} width={110} tick={{ fontSize: 11, fill: '#9ca3af', fontWeight: 600 }} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(139, 92, 246, 0.05)' }} />
            <Bar dataKey={dataKey} radius={[0, 6, 6, 0]} maxBarSize={22}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={GRADIENT_COLORS[index % GRADIENT_COLORS.length]} />
              ))}
            </Bar>
          </ReBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
});

BarChart.displayName = 'AdminBarChart';

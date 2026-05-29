import React, { memo } from 'react';
import { PieChart as RePieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Activity } from 'lucide-react';

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.[0]) return null;
  return (
    <div className="bg-black/90 backdrop-blur-sm px-4 py-3 rounded-xl shadow-xl border border-white/10">
      <p className="text-sm font-semibold text-white">{payload[0].name}</p>
      <p className="text-xs text-gray-400 mt-0.5">{payload[0].value?.toLocaleString()} users</p>
    </div>
  );
};

const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  if (percent < 0.05) return null;
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight={700}>
      {(percent * 100).toFixed(0)}%
    </text>
  );
};

export const PieChart = memo(({ data, title }) => {
  const COLORS = ['#10b981', '#6366f1', '#f43f5e', '#f59e0b', '#8b5cf6', '#06b6d4'];
  const hasData = data && data.length > 0 && data.some(d => d.value > 0);

  return (
    <div className="w-full h-72 bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-500">
      <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">{title}</h3>
      {hasData ? (
        <div className="w-full h-52">
          <ResponsiveContainer width="100%" height="100%">
            <RePieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={78}
                paddingAngle={4}
                dataKey="value"
                stroke="none"
                labelLine={false}
                label={renderCustomLabel}
                animationBegin={200}
                animationDuration={800}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend
                verticalAlign="bottom"
                height={32}
                iconType="circle"
                iconSize={8}
                formatter={(value) => <span className="text-xs text-gray-400 font-medium">{value}</span>}
              />
            </RePieChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <div className="w-full h-52 flex flex-col items-center justify-center">
          <Activity className="w-6 h-6 text-gray-600 mb-2" />
          <p className="text-xs text-gray-500">Awaiting activity data</p>
        </div>
      )}
    </div>
  );
});

PieChart.displayName = 'AdminPieChart';

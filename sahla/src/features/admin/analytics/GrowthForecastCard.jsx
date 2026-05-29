import React, { memo } from 'react';
import { Shield, AlertTriangle, TrendingUp, CheckCircle, Zap } from 'lucide-react';
import { calculateGrowthVectors, predictDaysToLimit } from '../../../utils/growthPrediction';
import { formatBytes } from '../../../utils/capacityCalculator';

export const GrowthForecastCard = memo(({ database, storage, forecast }) => {
  const vectors = calculateGrowthVectors(forecast || []);
  const hasForecast = forecast && forecast.length > 1;

  const dbPrediction = hasForecast
    ? predictDaysToLimit(database?.sizeBytes || 0, 536870912, vectors.dbVelocity)
    : { days: Infinity, zone: 'green', label: 'Stable' };

  const storagePrediction = hasForecast
    ? predictDaysToLimit(storage?.totalBytes || 0, 1073741824, vectors.storageVelocity)
    : { days: Infinity, zone: 'green', label: 'Stable' };

  const zoneStyles = {
    green: { text: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20', icon: CheckCircle, label: 'Healthy' },
    yellow: { text: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20', icon: TrendingUp, label: 'Monitor' },
    red: { text: 'text-rose-400', bg: 'bg-rose-500/10 border-rose-500/20', icon: AlertTriangle, label: 'Upgrade Soon' }
  };

  const worstZone = dbPrediction.zone === 'red' || storagePrediction.zone === 'red' ? 'red'
    : dbPrediction.zone === 'yellow' || storagePrediction.zone === 'yellow' ? 'yellow' : 'green';

  const style = zoneStyles[worstZone];
  const StatusIcon = style.icon;

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden hover:border-white/20 transition-all duration-500">
      {/* Top accent */}
      <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${
        worstZone === 'green' ? 'from-emerald-400 to-teal-500'
        : worstZone === 'yellow' ? 'from-amber-400 to-orange-500'
        : 'from-rose-400 to-red-500'
      }`} />

      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <Shield className={`w-5 h-5 ${style.text}`} />
          <div>
            <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest">Growth Forecast</h3>
            <p className="text-[10px] text-gray-600">Capacity runway</p>
          </div>
        </div>
        <span className={`px-2 py-0.5 text-[10px] font-bold uppercase rounded-full border flex items-center gap-1 ${style.bg} ${style.text}`}>
          <StatusIcon className="w-3 h-3" />
          {style.label}
        </span>
      </div>

      <div className="space-y-3">
        {/* Database */}
        <div className={`p-4 rounded-xl border ${zoneStyles[dbPrediction.zone].bg}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">Database (500MB)</p>
              <p className={`text-lg font-black ${zoneStyles[dbPrediction.zone].text}`}>
                {dbPrediction.days === Infinity ? '∞ Runway' : dbPrediction.days === 0 ? 'Exceeded!' : `${dbPrediction.days} days`}
              </p>
            </div>
            {hasForecast && vectors.dbVelocity > 0 && (
              <p className="text-xs text-gray-500 font-mono">+{formatBytes(Math.ceil(vectors.dbVelocity))}/day</p>
            )}
          </div>
        </div>

        {/* Storage */}
        <div className={`p-4 rounded-xl border ${zoneStyles[storagePrediction.zone].bg}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">Storage (1GB)</p>
              <p className={`text-lg font-black ${zoneStyles[storagePrediction.zone].text}`}>
                {storagePrediction.days === Infinity ? '∞ Runway' : storagePrediction.days === 0 ? 'Exceeded!' : `${storagePrediction.days} days`}
              </p>
            </div>
            {hasForecast && vectors.storageVelocity > 0 && (
              <p className="text-xs text-gray-500 font-mono">+{formatBytes(Math.ceil(vectors.storageVelocity))}/day</p>
            )}
          </div>
        </div>

        {/* User growth */}
        {hasForecast && vectors.userVelocity > 0 && (
          <div className="p-3 rounded-xl bg-violet-500/5 border border-violet-500/10">
            <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-0.5">Acquisition</p>
            <p className="text-sm font-bold text-violet-400">+{vectors.userVelocity.toFixed(1)} users/day</p>
          </div>
        )}

        {!hasForecast && (
          <div className="flex items-center gap-2 pt-2 text-[11px] text-gray-500">
            <Zap className="w-3 h-3" />
            Deploy daily snapshot Edge Function to enable forecasting
          </div>
        )}
      </div>
    </div>
  );
});

GrowthForecastCard.displayName = 'GrowthForecastCard';

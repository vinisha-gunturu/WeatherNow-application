import React from 'react';
import { motion } from 'framer-motion';
import { Sunrise, Sunset, Eye, Droplets, Wind, Gauge, Thermometer, Sun } from 'lucide-react';
import { formatTime, getWindDirection, getHumidityLevel, getUVLevel } from '../utils/weatherUtils';

const ExtraDetails = ({ data }) => {
  if (!data) return null;

  const current = data.current;
  const daily = data.daily;
  
  const detailsData = [
    {
      icon: <Droplets className="h-6 w-6" />,
      title: 'Humidity',
      value: `${Math.round(current.relative_humidity_2m)}%`,
      subtitle: getHumidityLevel(current.relative_humidity_2m).level,
      color: getHumidityLevel(current.relative_humidity_2m).color
    },
    {
      icon: <Wind className="h-6 w-6" />,
      title: 'Wind',
      value: `${Math.round(current.wind_speed_10m)} km/h`,
      subtitle: `${getWindDirection(current.wind_direction_10m)} direction`,
      color: 'text-blue-300'
    },
    {
      icon: <Gauge className="h-6 w-6" />,
      title: 'Pressure',
      value: `${Math.round(current.pressure_msl)} hPa`,
      subtitle: current.pressure_msl > 1013 ? 'High pressure' : 'Low pressure',
      color: current.pressure_msl > 1013 ? 'text-green-300' : 'text-orange-300'
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: 'Visibility',
      value: `${Math.round((data.hourly?.visibility?.[0] || 10000) / 1000)} km`,
      subtitle: 'Clear view',
      color: 'text-green-300'
    },
    {
      icon: <Thermometer className="h-6 w-6" />,
      title: 'Feels Like',
      value: `${Math.round(current.apparent_temperature)}°`,
      subtitle: `${Math.round(Math.abs(current.temperature_2m - current.apparent_temperature))}° difference`,
      color: 'text-purple-300'
    },
    {
      icon: <Sun className="h-6 w-6" />,
      title: 'UV Index',
      value: Math.round(daily?.uv_index_max?.[0] || 0),
      subtitle: getUVLevel(daily?.uv_index_max?.[0] || 0).level,
      color: getUVLevel(daily?.uv_index_max?.[0] || 0).color
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="space-y-6"
    >
      {/* Sunrise and Sunset */}
      {daily?.sunrise?.[0] && daily?.sunset?.[0] && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="weather-card p-6"
        >
          <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
            <span>🌅</span>
            Sun Times
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-orange-400/20 to-yellow-400/20 backdrop-blur-sm rounded-xl p-6 border border-orange-300/30"
            >
              <div className="flex items-center gap-4">
                <div className="bg-orange-400/30 rounded-full p-3">
                  <Sunrise className="h-8 w-8 text-orange-200" />
                </div>
                <div>
                  <div className="text-orange-200 text-sm font-medium">Sunrise</div>
                  <div className="text-white text-2xl font-bold">
                    {formatTime(daily.sunrise[0])}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-purple-400/20 to-pink-400/20 backdrop-blur-sm rounded-xl p-6 border border-purple-300/30"
            >
              <div className="flex items-center gap-4">
                <div className="bg-purple-400/30 rounded-full p-3">
                  <Sunset className="h-8 w-8 text-purple-200" />
                </div>
                <div>
                  <div className="text-purple-200 text-sm font-medium">Sunset</div>
                  <div className="text-white text-2xl font-bold">
                    {formatTime(daily.sunset[0])}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Daylight duration */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 bg-white/5 rounded-lg p-4 text-center"
          >
            <div className="text-white/60 text-sm mb-1">Daylight Duration</div>
            <div className="text-white text-xl font-semibold">
              {daily?.daylight_duration?.[0] 
                ? `${Math.round(daily.daylight_duration[0] / 3600)} hours`
                : 'N/A'
              }
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Weather Details Grid */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="weather-card p-6"
      >
        <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
          <span>📊</span>
          Weather Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {detailsData.map((detail, index) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`${detail.color}`}>
                  {detail.icon}
                </div>
                <div className="text-white/80 font-medium">
                  {detail.title}
                </div>
              </div>

              <div className="text-white text-2xl font-bold mb-1">
                {detail.value}
              </div>

              <div className={`text-sm ${detail.color}`}>
                {detail.subtitle}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ExtraDetails;

import React from 'react';
import { motion } from 'framer-motion';
import { getWeatherInfo, formatTemperature, formatTime } from '../utils/weatherUtils';

const HourlyForecast = ({ data }) => {
  if (!data || !data.hourly) return null;

  // Get next 24 hours of data
  const next24Hours = data.hourly.time.slice(0, 24).map((time, index) => ({
    time,
    temperature: data.hourly.temperature_2m[index],
    weatherCode: data.hourly.weather_code[index],
    precipitation: data.hourly.precipitation_probability[index] || 0,
    windSpeed: data.hourly.wind_speed_10m[index]
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="weather-card p-6"
    >
      <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
        <span>📊</span>
        24-Hour Forecast
      </h2>

      <div className="overflow-x-auto custom-scrollbar">
        <div className="flex gap-4 pb-4 min-w-max">
          {next24Hours.map((hour, index) => {
            const weatherInfo = getWeatherInfo(hour.weatherCode);
            const isCurrentHour = index === 0;

            return (
              <motion.div
                key={hour.time}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center min-w-[120px] border transition-all duration-300 hover:bg-white/20 hover:scale-105 ${
                  isCurrentHour ? 'border-white/50 bg-white/20' : 'border-white/20'
                }`}
              >
                {/* Time */}
                <div className={`text-sm mb-3 ${isCurrentHour ? 'text-white font-semibold' : 'text-white/70'}`}>
                  {isCurrentHour ? 'Now' : formatTime(hour.time)}
                </div>

                {/* Weather Icon */}
                <motion.div
                  className="text-3xl mb-3"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {weatherInfo.icon}
                </motion.div>

                {/* Temperature */}
                <div className="text-xl font-bold text-white mb-2">
                  {formatTemperature(hour.temperature)}°
                </div>

                {/* Precipitation chance */}
                {hour.precipitation > 0 && (
                  <div className="text-xs text-blue-200 mb-1">
                    💧 {Math.round(hour.precipitation)}%
                  </div>
                )}

                {/* Wind speed */}
                <div className="text-xs text-white/60">
                  🌪️ {Math.round(hour.windSpeed)} km/h
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="mt-4 text-center">
        <div className="text-white/60 text-sm">
          Swipe or scroll horizontally to see more hours
        </div>
      </div>
    </motion.div>
  );
};

export default HourlyForecast;

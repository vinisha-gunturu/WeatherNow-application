import React from 'react';
import { motion } from 'framer-motion';
import { getWeatherInfo, formatTemperature, formatDate } from '../utils/weatherUtils';

const DailyForecast = ({ data }) => {
  if (!data || !data.daily) return null;

  const dailyData = data.daily.time.slice(0, 7).map((date, index) => ({
    date,
    weatherCode: data.daily.weather_code[index],
    maxTemp: data.daily.temperature_2m_max[index],
    minTemp: data.daily.temperature_2m_min[index],
    precipitation: data.daily.precipitation_probability_max[index] || 0,
    windSpeed: data.daily.wind_speed_10m_max[index],
    uvIndex: data.daily.uv_index_max[index] || 0,
    sunrise: data.daily.sunrise[index],
    sunset: data.daily.sunset[index]
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="weather-card p-6"
    >
      <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
        <span>📅</span>
        7-Day Forecast
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-4">
        {dailyData.map((day, index) => {
          const weatherInfo = getWeatherInfo(day.weatherCode);
          const isToday = index === 0;

          return (
            <motion.div
              key={day.date}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center border transition-all duration-300 hover:bg-white/20 hover:scale-105 ${
                isToday ? 'border-white/50 bg-white/20' : 'border-white/20'
              }`}
            >
              {/* Day */}
              <div className={`text-sm mb-3 ${isToday ? 'text-white font-semibold' : 'text-white/70'}`}>
                {isToday ? 'Today' : formatDate(day.date)}
              </div>

              {/* Weather Icon */}
              <motion.div
                className="text-4xl mb-4"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.2 }}
              >
                {weatherInfo.icon}
              </motion.div>

              {/* Weather condition */}
              <div className="text-xs text-white/80 mb-3 min-h-[32px] flex items-center justify-center">
                {weatherInfo.condition}
              </div>

              {/* Temperature range */}
              <div className="flex justify-between items-center mb-4">
                <div className="text-lg font-bold text-white">
                  {formatTemperature(day.maxTemp)}°
                </div>
                <div className="text-sm text-white/60">
                  {formatTemperature(day.minTemp)}°
                </div>
              </div>

              {/* Additional info */}
              <div className="space-y-2 text-xs">
                {day.precipitation > 0 && (
                  <div className="flex items-center justify-between text-blue-200">
                    <span>💧 Rain</span>
                    <span>{Math.round(day.precipitation)}%</span>
                  </div>
                )}
                
                <div className="flex items-center justify-between text-white/60">
                  <span>🌪️ Wind</span>
                  <span>{Math.round(day.windSpeed)} km/h</span>
                </div>

                {day.uvIndex > 0 && (
                  <div className="flex items-center justify-between text-yellow-200">
                    <span>☀️ UV</span>
                    <span>{Math.round(day.uvIndex)}</span>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center"
      >
        <div className="bg-white/5 rounded-lg p-4">
          <div className="text-white/60 text-sm mb-1">Avg High</div>
          <div className="text-white text-2xl font-semibold">
            {formatTemperature(
              dailyData.reduce((sum, day) => sum + day.maxTemp, 0) / dailyData.length
            )}°
          </div>
        </div>

        <div className="bg-white/5 rounded-lg p-4">
          <div className="text-white/60 text-sm mb-1">Avg Low</div>
          <div className="text-white text-2xl font-semibold">
            {formatTemperature(
              dailyData.reduce((sum, day) => sum + day.minTemp, 0) / dailyData.length
            )}°
          </div>
        </div>

        <div className="bg-white/5 rounded-lg p-4">
          <div className="text-white/60 text-sm mb-1">Rainy Days</div>
          <div className="text-white text-2xl font-semibold">
            {dailyData.filter(day => day.precipitation > 30).length}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DailyForecast;

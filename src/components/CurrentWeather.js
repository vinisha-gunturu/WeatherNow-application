import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock } from 'lucide-react';
import { getWeatherInfo, formatTemperature, formatFullDate, formatTime } from '../utils/weatherUtils';

const CurrentWeather = ({ data, city }) => {
  if (!data || !data.current) return null;

  const weatherInfo = getWeatherInfo(data.current.weather_code);
  const currentTime = new Date().toISOString();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="weather-card p-8 md:p-12 text-center"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left side - Location and date */}
        <div className="text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 text-white/80 mb-2"
          >
            <MapPin className="h-5 w-5" />
            <span className="text-lg font-medium">
              {data.location?.name || city || 'Current Location'}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 text-white/60 mb-1"
          >
            <Calendar className="h-4 w-4" />
            <span>{formatFullDate(currentTime)}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-2 text-white/60"
          >
            <Clock className="h-4 w-4" />
            <span>{formatTime(currentTime)}</span>
          </motion.div>
        </div>

        {/* Center - Temperature and condition */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-8xl mb-4"
          >
            {weatherInfo.icon}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-8xl font-bold text-white mb-2"
          >
            {formatTemperature(data.current.temperature_2m)}°
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-white/80 font-medium"
          >
            {weatherInfo.condition}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-white/60 mt-2"
          >
            Feels like {formatTemperature(data.current.apparent_temperature)}°
          </motion.div>
        </div>

        {/* Right side - Quick stats */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="text-right space-y-4"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-white/60 text-sm">Humidity</div>
            <div className="text-white text-2xl font-semibold">
              {Math.round(data.current.relative_humidity_2m)}%
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-white/60 text-sm">Wind Speed</div>
            <div className="text-white text-2xl font-semibold">
              {Math.round(data.current.wind_speed_10m)} km/h
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-white/60 text-sm">Pressure</div>
            <div className="text-white text-2xl font-semibold">
              {Math.round(data.current.pressure_msl)} hPa
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CurrentWeather;

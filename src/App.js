import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';
import ExtraDetails from './components/ExtraDetails';
import Footer from './components/Footer';
import { useWeather } from './hooks/useWeather';
import { getWeatherBackground } from './utils/weatherUtils';

function App() {
  const [city, setCity] = useState('London');
  const { weatherData, loading, error, fetchWeather } = useWeather();

  useEffect(() => {
    // Get user's location on initial load
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeather(null, position.coords.latitude, position.coords.longitude);
        },
        () => {
          // Fallback to default city if location access denied
          fetchWeather(city);
        }
      );
    } else {
      fetchWeather(city);
    }
  }, [fetchWeather, city]);

  const handleSearch = (searchCity) => {
    setCity(searchCity);
    fetchWeather(searchCity);
  };

  const backgroundClass = weatherData ? getWeatherBackground(weatherData.current.weathercode) : 'bg-sunny-gradient';

  return (
    <div className={`min-h-screen ${backgroundClass} animate-gradient-shift transition-all duration-1000 ease-in-out`}
         style={{ backgroundSize: '400% 400%' }}>
      {/* Animated overlay for extra visual depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10 animate-pulse-glow"></div>

      {/* Floating particles for visual enhancement */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="min-h-screen backdrop-blur-sm relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 py-8 max-w-7xl relative z-10"
        >
          {/* Hero Section */}
          <HeroSection onSearch={handleSearch} loading={loading} />

          {error && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <p className="text-white bg-red-500/20 backdrop-blur-lg rounded-lg p-4 border border-red-300/30">
                {error}
              </p>
            </motion.div>
          )}

          {weatherData && !loading && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Current Weather */}
              <CurrentWeather data={weatherData} city={city} />

              {/* Hourly Forecast */}
              <HourlyForecast data={weatherData} />

              {/* 7-Day Forecast */}
              <DailyForecast data={weatherData} />

              {/* Extra Details */}
              <ExtraDetails data={weatherData} />
            </motion.div>
          )}

          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-center items-center py-16"
            >
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
            </motion.div>
          )}
        </motion.div>

        <Footer />
      </div>
    </div>
  );
}

export default App;

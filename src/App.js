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
    <div className={`min-h-screen ${backgroundClass} transition-all duration-1000 ease-in-out`}>
      <div className="min-h-screen backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 py-8 max-w-7xl"
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

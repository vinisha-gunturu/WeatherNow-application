import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin } from 'lucide-react';

const HeroSection = ({ onSearch, loading }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() && !loading) {
      onSearch(searchTerm.trim());
    }
  };

  const handleCurrentLocation = () => {
    if (navigator.geolocation && !loading) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          onSearch(null, position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          alert('Unable to retrieve your location. Please enter a city name.');
        }
      );
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
          Weather
          <motion.span
            className="inline-block ml-2"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            🌤️
          </motion.span>
        </h1>
        <p className="text-xl md:text-2xl text-white/80 font-light">
          Your daily weather companion
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-md mx-auto"
      >
        <form onSubmit={handleSubmit} className="relative">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Enter city name..."
              className="w-full px-6 py-4 pl-12 pr-20 text-lg bg-white/20 backdrop-blur-lg border border-white/30 rounded-full text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
              disabled={loading}
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 h-5 w-5" />
            
            <button
              type="button"
              onClick={handleCurrentLocation}
              disabled={loading}
              className="absolute right-12 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-200 p-1"
              title="Use current location"
            >
              <MapPin className="h-5 w-5" />
            </button>
          </div>
          
          <motion.button
            type="submit"
            disabled={loading || !searchTerm.trim()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/40 disabled:bg-white/10 disabled:cursor-not-allowed backdrop-blur-lg rounded-full p-2 transition-all duration-300"
          >
            {loading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
            ) : (
              <Search className="h-5 w-5 text-white" />
            )}
          </motion.button>
        </form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-4 text-white/60 text-sm"
        >
          Try searching for your city or use your current location
        </motion.div>
      </motion.div>

      {/* Floating weather icons animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 text-4xl"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 0 }}
        >
          ☀️
        </motion.div>
        <motion.div
          className="absolute top-40 right-20 text-3xl"
          animate={{ y: [0, -15, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        >
          ⛅
        </motion.div>
        <motion.div
          className="absolute top-60 left-1/4 text-2xl"
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        >
          🌧️
        </motion.div>
        <motion.div
          className="absolute top-32 right-1/3 text-2xl"
          animate={{ y: [0, -12, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, delay: 3 }}
        >
          ❄️
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;

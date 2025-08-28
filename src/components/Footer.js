import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Globe, Cloud } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="mt-16 bg-black/20 backdrop-blur-lg border-t border-white/10"
    >
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left side - Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="text-3xl"
            >
              🌤️
            </motion.div>
            <div>
              <h3 className="text-white text-xl font-bold">Weather App</h3>
              <p className="text-white/60 text-sm">Your daily weather companion</p>
            </div>
          </motion.div>

          {/* Center - Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <motion.a
              href="https://open-meteo.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200"
            >
              <Cloud className="h-4 w-4" />
              <span className="text-sm">Open-Meteo API</span>
            </motion.a>
            
            <motion.a
              href="#"
              onClick={(e) => e.preventDefault()}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm">About</span>
            </motion.a>

            <motion.a
              href="#"
              onClick={(e) => e.preventDefault()}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200"
            >
              <Github className="h-4 w-4" />
              <span className="text-sm">Source</span>
            </motion.a>
          </motion.div>

          {/* Right side - Credits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center md:text-right"
          >
            <div className="flex items-center justify-center md:justify-end gap-1 text-white/60 text-sm mb-1">
              Made with <Heart className="h-4 w-4 text-red-400 animate-pulse" /> using React
            </div>
            <div className="text-white/40 text-xs">
              © {currentYear} Weather App. All rights reserved.
            </div>
          </motion.div>
        </div>

        {/* Bottom section - Weather data attribution */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 pt-6 border-t border-white/10"
        >
          <div className="text-center">
            <p className="text-white/40 text-xs leading-relaxed">
              Weather data provided by{' '}
              <a
                href="https://open-meteo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors underline"
              >
                Open-Meteo
              </a>
              {' '}• Geocoding by{' '}
              <a
                href="https://nominatim.openstreetmap.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors underline"
              >
                OpenStreetMap Nominatim
              </a>
            </p>
          </div>
        </motion.div>

        {/* Floating animation elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute bottom-10 left-10 text-lg opacity-30"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: 0
            }}
          >
            ⭐
          </motion.div>
          
          <motion.div
            className="absolute bottom-20 right-20 text-sm opacity-20"
            animate={{
              y: [0, -15, 0],
              rotate: [0, -10, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: 2
            }}
          >
            🌟
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

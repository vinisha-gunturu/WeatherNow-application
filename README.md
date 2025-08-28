# 🌤️ Modern Weather App

A beautiful, responsive weather application built with React and Tailwind CSS, featuring real-time weather data, stunning animated backgrounds, and a modern UI design.

![Weather App Preview](https://img.shields.io/badge/React-18.2.0-blue) ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.3.6-blue) ![Open Meteo API](https://img.shields.io/badge/API-Open_Meteo-green)

## ✨ Features

- 🌍 **Real-time Weather Data** - Powered by Open-Meteo API
- 🎨 **Dynamic Backgrounds** - Animated gradients that change based on weather conditions
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🔍 **Smart Search** - Search by city name or use current location
- ⏰ **Hourly Forecast** - 24-hour scrollable weather forecast
- 📅 **7-Day Forecast** - Weekly weather overview with detailed information
- 🌪️ **Detailed Weather Info** - Humidity, wind speed, pressure, UV index, sunrise/sunset
- ✨ **Smooth Animations** - Framer Motion powered transitions and effects
- 🎭 **Glass Morphism UI** - Modern glass-effect design with backdrop blur
- 🌈 **Multiple Weather Themes** - Sunny, rainy, cloudy, snowy, and night gradients

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:
- **Node.js** (version 16.0 or higher)
- **npm** (comes with Node.js) or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd weather-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```

4. **Open your browser**
   
   The app will automatically open at `http://localhost:3000`

## 📁 Project Structure

```
weather-app/
├── public/
│   ├── index.html          # HTML template
│   └── favicon.ico         # App icon
├── src/
│   ├── components/         # React components
│   │   ├── HeroSection.js      # Search section with animated background
│   │   ├── CurrentWeather.js   # Main weather display card
│   │   ├── HourlyForecast.js   # 24-hour horizontal scroll forecast
│   │   ├── DailyForecast.js    # 7-day weather grid
│   │   ├── ExtraDetails.js     # Additional weather information
│   │   └── Footer.js           # App footer with credits
│   ├── hooks/             # Custom React hooks
│   │   └── useWeather.js       # Weather API integration hook
│   ├── utils/             # Utility functions
│   │   └── weatherUtils.js     # Weather data formatting and mapping
│   ├── App.js             # Main app component
│   ├── index.js           # React entry point
│   └── index.css          # Global styles and Tailwind config
├── package.json           # Project dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
└── README.md              # This file
```

## 🛠️ Development

### Available Scripts

- **`npm start`** - Runs the app in development mode
- **`npm build`** - Builds the app for production
- **`npm test`** - Launches the test runner
- **`npm eject`** - Ejects from Create React App (irreversible)

### Environment Variables

The app uses public APIs and doesn't require any environment variables or API keys:

- **Weather Data**: [Open-Meteo API](https://open-meteo.com/) (free, no API key required)
- **Geocoding**: [OpenStreetMap Nominatim](https://nominatim.openstreetmap.org/) (free, no API key required)

### Key Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "framer-motion": "^10.16.4",
  "axios": "^1.6.0",
  "lucide-react": "^0.292.0",
  "tailwindcss": "^3.3.6"
}
```

## 🎨 Customization

### Adding New Weather Themes

1. **Add gradient to Tailwind config** (`tailwind.config.js`):
   ```javascript
   backgroundImage: {
     'custom-gradient': 'linear-gradient(135deg, #color1 0%, #color2 100%)',
   }
   ```

2. **Update weather mapping** (`src/utils/weatherUtils.js`):
   ```javascript
   weatherCodeMap: {
     newCode: { condition: 'Description', icon: '🌈', background: 'bg-custom-gradient' }
   }
   ```

### Modifying Components

- **Hero Section**: Edit `src/components/HeroSection.js` for search functionality
- **Weather Cards**: Modify `src/components/CurrentWeather.js` for main display
- **Forecasts**: Update `src/components/HourlyForecast.js` or `src/components/DailyForecast.js`
- **Styling**: Customize `src/index.css` for global styles

## 🌐 API Integration

### Weather Data Flow

1. **User Input** → City name or GPS coordinates
2. **Geocoding** → Convert city name to coordinates (if needed)
3. **Weather API** → Fetch weather data from Open-Meteo
4. **Data Processing** → Format and display weather information
5. **Background Update** → Change theme based on weather conditions

### API Endpoints Used

- **Geocoding**: `https://nominatim.openstreetmap.org/search`
- **Weather**: `https://api.open-meteo.com/v1/forecast`

## 📱 Responsive Design

The app is built with a mobile-first approach:

- **Mobile** (320px+): Single column layout, compact cards
- **Tablet** (768px+): Two-column grids, larger text
- **Desktop** (1024px+): Multi-column layout, full feature display
- **Large Screens** (1280px+): Maximum width container, optimized spacing

## 🔧 Troubleshooting

### Common Issues

1. **App won't start**
   ```bash
   # Clear node modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   npm start
   ```

2. **API requests failing**
   - Check internet connection
   - Verify Open-Meteo API is accessible
   - Check browser console for CORS issues

3. **Styling issues**
   ```bash
   # Rebuild Tailwind CSS
   npm run build
   ```

4. **Location not working**
   - Ensure HTTPS (required for geolocation)
   - Check browser location permissions
   - Try manual city search instead

### Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deployment Options

- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Use `gh-pages` package
- **Heroku**: Add buildpack for static sites

### Example: Deploy to Netlify

1. Run `npm run build`
2. Go to [Netlify](https://app.netlify.com/)
3. Drag the `build` folder to deploy
4. Your app is live! 🎉

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[Open-Meteo](https://open-meteo.com/)** - Free weather API
- **[OpenStreetMap](https://www.openstreetmap.org/)** - Geocoding services
- **[Lucide React](https://lucide.dev/)** - Beautiful icons
- **[Framer Motion](https://www.framer.com/motion/)** - Smooth animations
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](../../issues) section
2. Create a new issue with detailed description
3. Include browser version and error messages

---

<div align="center">

**Built with ❤️ using React & Tailwind CSS**

[⭐ Give it a star](../../stargazers) if you found it helpful!

</div>

// Weather code mappings for Open-Meteo API with stunning gradient backgrounds
export const weatherCodeMap = {
  0: { condition: 'Clear sky', icon: '☀️', background: 'bg-sunny-gradient' },
  1: { condition: 'Mainly clear', icon: '🌤️', background: 'bg-sunset-gradient' },
  2: { condition: 'Partly cloudy', icon: '⛅', background: 'bg-cloudy-gradient' },
  3: { condition: 'Overcast', icon: '☁️', background: 'bg-cloudy-gradient' },
  45: { condition: 'Fog', icon: '🌫️', background: 'bg-cloudy-gradient' },
  48: { condition: 'Depositing rime fog', icon: '🌫️', background: 'bg-aurora-gradient' },
  51: { condition: 'Light drizzle', icon: '🌦️', background: 'bg-rainy-gradient' },
  53: { condition: 'Moderate drizzle', icon: '🌦️', background: 'bg-tropical-gradient' },
  55: { condition: 'Dense drizzle', icon: '🌧️', background: 'bg-rainy-gradient' },
  56: { condition: 'Light freezing drizzle', icon: '🌨️', background: 'bg-snowy-gradient' },
  57: { condition: 'Dense freezing drizzle', icon: '🌨️', background: 'bg-snowy-gradient' },
  61: { condition: 'Slight rain', icon: '🌦️', background: 'bg-tropical-gradient' },
  63: { condition: 'Moderate rain', icon: '🌧️', background: 'bg-rainy-gradient' },
  65: { condition: 'Heavy rain', icon: '🌧️', background: 'bg-rainy-gradient' },
  66: { condition: 'Light freezing rain', icon: '🌨️', background: 'bg-aurora-gradient' },
  67: { condition: 'Heavy freezing rain', icon: '🌨️', background: 'bg-snowy-gradient' },
  71: { condition: 'Slight snow fall', icon: '🌨️', background: 'bg-snowy-gradient' },
  73: { condition: 'Moderate snow fall', icon: '❄️', background: 'bg-snowy-gradient' },
  75: { condition: 'Heavy snow fall', icon: '❄️', background: 'bg-aurora-gradient' },
  77: { condition: 'Snow grains', icon: '❄️', background: 'bg-snowy-gradient' },
  80: { condition: 'Slight rain showers', icon: '🌦️', background: 'bg-tropical-gradient' },
  81: { condition: 'Moderate rain showers', icon: '🌧️', background: 'bg-rainy-gradient' },
  82: { condition: 'Violent rain showers', icon: '⛈️', background: 'bg-night-gradient' },
  85: { condition: 'Slight snow showers', icon: '🌨️', background: 'bg-aurora-gradient' },
  86: { condition: 'Heavy snow showers', icon: '❄️', background: 'bg-snowy-gradient' },
  95: { condition: 'Thunderstorm', icon: '⛈️', background: 'bg-night-gradient' },
  96: { condition: 'Thunderstorm with slight hail', icon: '⛈️', background: 'bg-night-gradient' },
  99: { condition: 'Thunderstorm with heavy hail', icon: '⛈️', background: 'bg-night-gradient' }
};

export const getWeatherInfo = (weatherCode) => {
  return weatherCodeMap[weatherCode] || weatherCodeMap[0];
};

export const getWeatherBackground = (weatherCode) => {
  const info = getWeatherInfo(weatherCode);
  return info.background;
};

export const formatTemperature = (temp) => {
  return Math.round(temp);
};

export const formatTime = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });
};

export const formatFullDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const getWindDirection = (degrees) => {
  const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  const index = Math.round(degrees / 22.5) % 16;
  return directions[index];
};

export const getUVLevel = (uvIndex) => {
  if (uvIndex <= 2) return { level: 'Low', color: 'text-green-400' };
  if (uvIndex <= 5) return { level: 'Moderate', color: 'text-yellow-400' };
  if (uvIndex <= 7) return { level: 'High', color: 'text-orange-400' };
  if (uvIndex <= 10) return { level: 'Very High', color: 'text-red-400' };
  return { level: 'Extreme', color: 'text-purple-400' };
};

export const getHumidityLevel = (humidity) => {
  if (humidity < 30) return { level: 'Low', color: 'text-orange-400' };
  if (humidity < 50) return { level: 'Comfortable', color: 'text-green-400' };
  if (humidity < 70) return { level: 'Moderate', color: 'text-yellow-400' };
  return { level: 'High', color: 'text-blue-400' };
};

export const getVisibilityLevel = (visibility) => {
  const visibilityKm = visibility / 1000;
  if (visibilityKm > 10) return { level: 'Excellent', color: 'text-green-400' };
  if (visibilityKm > 5) return { level: 'Good', color: 'text-yellow-400' };
  if (visibilityKm > 2) return { level: 'Moderate', color: 'text-orange-400' };
  return { level: 'Poor', color: 'text-red-400' };
};

const API_KEY = import.meta.env.VITE_WEATHER_KEY;



export function getForecast(city, lang) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=${lang}&appid=${API_KEY}`
  ).then(res => res.json());
}


export function getWeather(city, lang) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=${lang}&appid=${API_KEY}`
  ).then(res => res.json());
}




export function getForecast(city, lang) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=${lang}&appid=3d4c2bf9a6c0fd81dde9d9f1c955e217`
  ).then(res => res.json());
}


export function getWeather(city, lang) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=${lang}&appid=3d4c2bf9a6c0fd81dde9d9f1c955e217`
  ).then(res => res.json());
}
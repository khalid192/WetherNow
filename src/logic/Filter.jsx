   
   
   
   
  export function Filter5days(weatherForecast,setFilteredForecast){ 
  if (weatherForecast.cod === "200") {
      const filtered = weatherForecast.list.filter((item) =>
        item.dt_txt.includes("12:00:00"),
      );

      setFilteredForecast(filtered);
    }}
import { useState,createContext ,useEffect} from "react";




export const IPContext = createContext();




export default function IPProvider({children}) {
    
    const [weather, setWeather] = useState('null');
    const [weatherForecast, setWeatherForecast] = useState([{},{}]);



    

    const [Address, setAddress] = useState('');
    const [lung, setlung] = useState("en");
    const temp = lung === "en"
  ? { ma: "max", mi: "min" }
  : { ma: "أقصى", mi: "أدنى" };



     useEffect(() => {
       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Address}&units=metric&lang=${lung}&appid=3d4c2bf9a6c0fd81dde9d9f1c955e217`)
         .then(res => res.json())
         .then(data => setWeather(data));
     }, [Address,lung]);

    

       useEffect(() => {
       fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${Address}&units=metric&lang=${lung}&appid=3d4c2bf9a6c0fd81dde9d9f1c955e217`)
         .then(res => res.json())
         .then(data => setWeatherForecast(data));
         
     }, [Address,lung]);
    

    return (
    
    <IPContext.Provider value={{weather, setWeather,setAddress,Address,setlung,lung,temp,weatherForecast,setWeatherForecast}}>
        {children}
    </IPContext.Provider>)

  }
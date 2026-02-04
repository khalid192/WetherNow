import { useState,createContext ,useEffect} from "react";

export const IPContext = createContext();


export default function IPProvider({children}) {
    
    const [weather, setWeather] = useState('null');
    const [Address, setAddress] = useState('paris');

     useEffect(() => {
       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Address}&units=metric&lang=en&appid=3d4c2bf9a6c0fd81dde9d9f1c955e217`)
         .then(res => res.json())
         .then(data => setWeather(data));
     }, []);
     console.log(weather);

    return (
    
    <IPContext.Provider value={{weather, setWeather,setAddress,Address}}>
        {children}
    </IPContext.Provider>)

  }
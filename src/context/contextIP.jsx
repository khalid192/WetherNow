import { useState,createContext ,useEffect} from "react";

export const IPContext = createContext();


export default function IPProvider({children}) {



   
  


 

    
    const [weather, setWeather] = useState('null');
    const [Address, setAddress] = useState('paris');
    const [lung, setlung] = useState("en");
    const temp = lung === "en"
  ? { ma: "max", mi: "min" }
  : { ma: "أقصى", mi: "أدنى" };

  console.log(temp);

     useEffect(() => {
       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Address}&units=metric&lang=${lung}&appid=3d4c2bf9a6c0fd81dde9d9f1c955e217`)
         .then(res => res.json())
         .then(data => setWeather(data));
     }, [Address,lung]);
     console.log(weather);

    return (
    
    <IPContext.Provider value={{weather, setWeather,setAddress,Address,setlung,lung,temp}}>
        {children}
    </IPContext.Provider>)

  }
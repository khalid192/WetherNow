import { Title } from "@mui/icons-material";
import { useState,createContext ,useEffect} from "react";

import Description from "../Description";
import Error from "../erorre";
import Add from "../Add";

export const IPContext = createContext();




export default function IPProvider({children}) {
    
    const [weather, setWeather] = useState('null');
    const [weatherForecast, setWeatherForecast] = useState([{},{}]);
     const iconCode = weather?.weather?.[0]?.icon;


    
//language configuration
    const [Address, setAddress] = useState('');
    const [lung, setlung] = useState("en");
    const temp = lung === "en"
  ? { ma: "max", mi: "min" }
  : { ma: "أقصى", mi: "أدنى" };

  const sx = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100dvh",
    fontFamily: "Inter, sans-serif",
    width: "100vw",
    position: "relative",
    overflow: "hidden",
  };


//fetching data from api dayly
     useEffect(() => {
       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Address}&units=metric&lang=${lung}&appid=3d4c2bf9a6c0fd81dde9d9f1c955e217`)
         .then(res => res.json())
         .then(data => setWeather(data));
     }, [Address,lung]);

//fetching data from api for 5 days   

       useEffect(() => {
       fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${Address}&units=metric&lang=${lung}&appid=3d4c2bf9a6c0fd81dde9d9f1c955e217`)
         .then(res => res.json())
         .then(data => setWeatherForecast(data));
         
     }, [Address,lung]);



//snackbar configuration
    const [open, setOpen] = useState({open:false,severity:'',Title:''}); 

     function handleClose() {
    setOpen((i) => ({ ...i, open: false, Title: "", severity: "" }));
  }

  //content configuration
    const renderContent = () => {
      if (weather.cod === "404") {
        return <Error />;
      } else if (weather.cod === "400") {
        return <Add />;
      } else {
        return <Description />;
      }
    };

    return (
    
    <IPContext.Provider value={{handleClose,iconCode,open,setOpen,weather, setWeather,setAddress,Address,setlung,lung,temp,weatherForecast,setWeatherForecast,sx}}>
        {children}
    </IPContext.Provider>)

  }




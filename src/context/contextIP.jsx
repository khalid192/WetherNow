
import { useState, createContext, useEffect,useRef } from "react";


import { getForecast, getWeather } from "../logic/Forecast";
import { handleClick as handleClickLogic } from "../logic/HandleClick";
import { BackImag  } from "../logic/ImageIcone";
import {Filter5days} from "../logic/Filter";
import {Rcontent as renderContent} from "../logic/Rcontent";
import {date as Thedate} from "../logic/date"; 


export const IPContext = createContext();

//iconeWeather
import icone01d from "../wethers_icone/icone01d.png";
import icone02d from "../wethers_icone/icone02d.png";
import icone03d from "../wethers_icone/icone03d.png";

import icone04d from "../wethers_icone/icone04d.png";
import icone09d from "../wethers_icone/icone09d.png";
import icone10d from "../wethers_icone/icone10d.png";

import icone11d from "../wethers_icone/icone11d.png";
import icone13d from "../wethers_icone/icone13d.png";
import icone50d from "../wethers_icone/icone50d.png";

import icone01n from "../wethers_icone/icone01n.png";
import icone02n from "../wethers_icone/icone02n.png";
import icone03n from "../wethers_icone/icone03n.png";

import icone04n from "../wethers_icone/icone04n.png";
import icone09n from "../wethers_icone/icone09n.png";
import icone10n from "../wethers_icone/icone10n.png";

import icone11n from "../wethers_icone/icone11n.png";
import icone13n from "../wethers_icone/icone13n.png";
import icone50n from "../wethers_icone/icone50n.png";


import undefinedP from "../background.jsx/undefined.jpg";

export default function IPProvider({ children }) {
  const [weather, setWeather] = useState("null");
  const [weatherForecast, setWeatherForecast] = useState([{}, {}]);
  const iconCode = weather?.weather?.[0]?.icon;

  //language configuration
  const [Address, setAddress] = useState("");
  const [lung, setlung] = useState("en");
  const temp = lung === "en" ? { ma: "max", mi: "min" } : { ma: "أقصى", mi: "أدنى" };

  
      function Bb(){
       setlung(lung === "en" ? "ar" : "en")

    }

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


  //fetching data from api dayly and 5 days
useEffect(() => {
  getWeather(Address, lung).then(setWeather);
   getForecast(Address, lung).then(setWeatherForecast);
}, [Address, lung]);



  //snackbar configuration
  const [city, setCity] = useState("");
  const [open, setOpen] = useState({ open: false, severity: "", Title: "" });


  function handleClose() {
    setOpen((i) => ({ ...i, open: false, Title: "", severity: "" }));
  }

  function handleChange(e) {
    setCity(e.target.value);
  }

  const weatherRef = useRef();
  weatherRef.current = weather.cod; 
  
const handleClick = () => {
  handleClickLogic(city, setOpen, setAddress, setCity, lung, weatherRef);
};
  



  //content configuration

  const Rcontent = () => {
  return renderContent(weather);
  };




  //background configuration
  const [bgImage, setBgImage] = useState(undefinedP);
  const [fade, setFade] = useState(false);

  useEffect(() => {
     BackImag( iconCode, bgImage, setBgImage, setFade)
  }, [iconCode, weather]);



  //weatherIcone
  const weatherIcone = {
    "01d": icone01d,
    "02d": icone02d,
    "03d": icone03d,

    "04d": icone04d,
    "09d": icone09d,
    "10d": icone10d,

    "11d": icone11d,
    "13d": icone13d,
    "50d": icone50d,

    "01n": icone01n,
    "02n": icone02n,
    "03n": icone03n,

    "04n": icone04n,
    "09n": icone09n,
    "10n": icone10n,

    "11n": icone11n,
    "13n": icone13n,
    "50n": icone50n,
  };
  

  //filtered 5 days
  const [filteredForecast, setFilteredForecast] = useState([]);

  useEffect(() => {

   Filter5days(weatherForecast,setFilteredForecast )

  }, [weather, weatherForecast]);

const date = () => Thedate;








  return (
    <IPContext.Provider
      value={{
        weatherIcone,
        filteredForecast,
        setFilteredForecast,
        bgImage,
        fade,
        Rcontent,
        handleClose,
        iconCode,
        open,
        setOpen,
        weather,
        setWeather,
        setAddress,
        Address,
        setlung,
        lung,
        temp,
        weatherForecast,
        setWeatherForecast,
        sx,
        city,
        setCity,
        handleChange,
        handleClick,
        iconCode,
        date,
        Bb,
      }}
    >
      {children}
    </IPContext.Provider>
  );
}

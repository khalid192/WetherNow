    
    
    //Background images
import P01d from "../background.jsx/P01d.jpg";
import P01n from "../background.jsx/P01n.jpg";
import P02d from "../background.jsx/P02d.jpg";
import P02n from "../background.jsx/P02n.jpg";
import P03n from "../background.jsx/P03n.jpg";
import P03d from "../background.jsx/P03d.jpg";

import P09n from "../background.jsx/P09n.jpg";
import P09d from "../background.jsx/P09d.jpg";

import P11d from "../background.jsx/P11d.jpg";
import P11n from "../background.jsx/P11n.jpg";

import P13d from "../background.jsx/P13d.jpg";
import P13n from "../background.jsx/P13n.jpg";
import P50n from "../background.jsx/P50n.jpg";
import P50d from "../background.jsx/P50d.jpg";

import undefinedP from "../background.jsx/undefined.jpg";


    
    const backgroundImages = {
        "01d": P01d,
        "01n": P01n,
        "02d": P02d,
        "02n": P02n,
    
        "03d": P03d,
        "03n": P03n,
        "04d": P03d,
        "04n": P03n,
    
        "09d": P09d,
        "09n": P09n,
        "10d": P09d,
        "10n": P09n,
    
        "11d": P11d,
        "11n": P11n,
    
        "13d": P13d,
        "13n": P13n,
        "50d": P50d,
        "50n": P50n,
      };
    
    
    
    
    
    export function BackImag(iconCode, bgImage, setBgImage, setFade) {
    const newImage = backgroundImages[iconCode] || undefinedP;
    if (newImage !== bgImage) {
      setBgImage(newImage);
      setFade(true);

      const t = setTimeout(() => setFade(false), 600);
      return () => clearTimeout(t);
    }}


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
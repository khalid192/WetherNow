import { Box, Card, List } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { IPContext } from "./context/contextIP.jsx";

import icone01d from "./wethers_icone/icone01d.png";
import icone02d from "./wethers_icone/icone02d.png";
import icone03d from "./wethers_icone/icone03d.png";

import icone04d from "./wethers_icone/icone04d.png";
import icone09d from "./wethers_icone/icone09d.png";
import icone10d from "./wethers_icone/icone10d.png";

import icone11d from "./wethers_icone/icone11d.png";
import icone13d from "./wethers_icone/icone13d.png";
import icone50d from "./wethers_icone/icone50d.png";

import icone01n from "./wethers_icone/icone01n.png";
import icone02n from "./wethers_icone/icone02n.png";
import icone03n from "./wethers_icone/icone03n.png";

import icone04n from "./wethers_icone/icone04n.png";
import icone09n from "./wethers_icone/icone09n.png";
import icone10n from "./wethers_icone/icone10n.png";

import icone11n from "./wethers_icone/icone11n.png";
import icone13n from "./wethers_icone/icone13n.png";
import icone50n from "./wethers_icone/icone50n.png";

export default function Card5days() {
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

  const { weatherForecast, weather, setWeatherForecast } =
    useContext(IPContext);
  const [filteredForecast, setFilteredForecast] = useState([]);

  useEffect(() => {
    if (!weatherForecast) return;

    if (weatherForecast.cod === "200") {
      const filtered = weatherForecast.list.filter((item) =>
        item.dt_txt.includes("12:00:00"),
      );

      setFilteredForecast(filtered);
    }
  }, [weather, weatherForecast]);

  return (
    <Box
      sx={{
    p: 1,
    textAlign: "right",
    mb: 2,
    backdropFilter: weather && weather.cod === 200 ? "blur(10px)" : "none",
    backgroundColor: "rgba(182, 240, 241, 0.02)",
    borderRadius: "15px",
    width: "95%",         
    maxWidth: "450px",    
    mx: "auto",        
    minHeight: { xs: "100px", sm: "100px" }, 
    display: "flex",
    flexDirection:"row",
    justifyContent: "space-around",
    alignItems: "center",
  }}
    >
      {weather.cod == 200
        ? filteredForecast.map((item) => (
            <Card
              key={item.dt}
              sx={{
                backgroundColor: "rgba(183, 179, 179, 0.15)",
                width: "80px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={weatherIcone[item.weather[0].icon]}
                alt="Weather Icon"
                style={{ width: "50%" }}
              />
              <div
                style={{
                  fontFamily: "Arial, sans-serif",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p style={{ margin: 0, fontSize: "14px" }}>
                  {" "}
                  {new Date(item.dt_txt).toLocaleDateString("en-US", {
                    weekday: "short",
                  })}
                </p>
                <p style={{ margin: 0, fontSize: "12px" }}>
                  {item.main.temp}°C
                </p>
                <p style={{ margin: 0, fontSize: "10px" }}>
                  {item.weather[0].description}
                </p>
              </div>
            </Card>
          ))
        : null}
    </Box>
  );
}

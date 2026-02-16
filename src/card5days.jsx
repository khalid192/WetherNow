import { Box, Card,Typography} from "@mui/material";
import { useContext,} from "react";
import { IPContext } from "./context/contextIP.jsx";



export default function Card5days() {


  const { weather,filteredForecast, weatherIcone } =useContext(IPContext);



  return (
    <Box
      sx={{
    p: 1,
    textAlign: "right",
    mb: 2,
    backdropFilter: weather && weather.cod === 200 ? "blur(10px)" : "none",
    backgroundColor: "rgba(182, 240, 241, 0.02)",
    borderRadius: "15px",
    width: {xs:"80%",sm: "530px"},         
     
    mx: "auto",        
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
                width: {xs:"45px",sm: "85px"},
                p:0.5,
                height: {xs:"fitContent",sm: "95%"},
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={weatherIcone[item.weather[0].icon]}
                alt="Weather Icon"
                style={{ width: "50%",height:'auto' }}
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
                <p sx={{ margin: 0, fontSize: "14px" }}>
                  {" "}
                  {new Date(item.dt_txt).toLocaleDateString("en-US", {
                    weekday: "short",
                  })}
                </p>
                <p style={{ margin: 0, fontSize: "12px" }}>
                  {item.main.temp}°C
                </p>
                <Typography
                sx={{
                   m: 0,
                   fontSize: {
                    xs: "6px",
                    sm: "8px",
                    md: "11px",
                    lg: "12px"}}}>
                  {item.weather[0].description}
                </Typography>
              </div>
            </Card>
          ))
        : null}
    </Box>
  );
}

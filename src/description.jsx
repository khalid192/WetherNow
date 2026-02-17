import {Typography } from "@mui/material";
import Icone from "./icone";
import {useContext} from "react"
import {IPContext} from "./context/contextIP.jsx"


export default function Description() {
 const {weather,temp} = useContext(IPContext)
 

 

  return (


    <div style={{ height: "150px", width: "100%", display: "flex" }}>

         <Icone />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <div style={{ display: "flex" }}>
          <Typography
            style={{
              flex: 0.5,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            variant="h2"
          >
          </Typography>
          <Typography
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            variant="h5"
          >
            {weather?.main?.temp || 0} <p style={{ fontSize: "15px" }}>°C</p>
          </Typography>
        </div>
        <Typography sx={{ mr: 1 }} variant="h7">

            {weather?.weather?.[0]?.description}

        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography sx={{ fontSize: "10px" }}>{temp.mi}: {weather?.main?.temp_min || 0}</Typography>
          <Typography sx={{ fontSize: "10px" }}>{temp.ma}: {weather?.main?.temp_max || 0}</Typography>
        </div>
      </div>
    </div>
  );
}

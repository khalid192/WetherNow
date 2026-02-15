import { Box, Card, CardContent } from "@mui/material";
import "./index.css";
import Snackbar from "@mui/material/Snackbar";

import Alert from "@mui/material/Alert";

import Search from "./search";
import Localdate from "./localdate";
import Description from "./description";
import ButtonLung from "./buttonlung";

import Error from "./erorre";
import Add from "./add";
import Card5days from "./card5days";

import { useContext, useEffect, useState } from "react";
import { IPContext } from "./context/contextIP.jsx";

import P01d from "./background.jsx/P01d.jpg";
import P01n from "./background.jsx/P01n.jpg";
import P02d from "./background.jsx/P02d.jpg";
import P02n from "./background.jsx/P02n.jpg";
import P03n from "./background.jsx/P03n.jpg";
import P03d from "./background.jsx/P03d.jpg";

import P09n from "./background.jsx/P09n.jpg";
import P09d from "./background.jsx/P09d.jpg";

import P11d from "./background.jsx/P11d.jpg";
import P11n from "./background.jsx/P11n.jpg";

import P13d from "./background.jsx/P13d.jpg";
import P13n from "./background.jsx/P13n.jpg";
import P50n from "./background.jsx/P50n.jpg";
import P50d from "./background.jsx/P50d.jpg";

import undefinedP from "./background.jsx/undefined.jpg";

function App() {
  const { weather, open, setOpen, iconCode,sx ,handleClose} = useContext(IPContext);


//background list
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


//background configuration
  const [bgImage, setBgImage] = useState(undefinedP);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const newImage = backgroundImages[iconCode] || undefinedP;
    if (newImage !== bgImage) {
      setBgImage(newImage);
      setFade(true);

      const t = setTimeout(() => setFade(false), 600);
      return () => clearTimeout(t);
    }
  }, [iconCode, weather]);


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
    <>
      <Box sx={sx}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: fade ? 0 : 1,
            transition: "opacity 1s",
            zIndex: 0,
          }}
        ></div>

        <Card5days />

        <Card
          sx={{
            minWidth: 275,
            padding: 1,
            textAlign: "right",
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.23)",
            borderRadius: "15px",
          }}
        >
          <CardContent sx={{ padding: 0 }}>
            <Search />
            <Localdate />
            {renderContent()}
          </CardContent>
          <div style={{ width: "100%", display: "flex" }}>
            <ButtonLung />
          </div>
        </Card>
      </Box>

      <Snackbar open={open.open} autoHideDuration={1500} onClose={handleClose}>
        <Alert severity={open.severity}>{open.Title}</Alert>
      </Snackbar>
    </>
  );
}

export default App;

import { Box, Card, CardContent } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";


import Search from "./search";
import Localdate from "./localdate";
import ButtonLung from "./buttonlung";
import Card5days from "./card5days";


import { useContext} from "react";
import { IPContext } from "./context/contextIP.jsx";



function App() {

  const { bgImage, fade, open,sx ,handleClose,Rcontent} = useContext(IPContext);

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
            {Rcontent()}
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


import { Box, Card, CardContent, } from "@mui/material";


import Search from "./search";
import Localdate from "./localdate";
import Description from "./description";
import ButtonLung from "./buttonlung";
import Error from "./erorre";

import { useContext } from "react";
import { IPContext } from "./context/contextIP.jsx";

function App() {

  const { weather } = useContext(IPContext);

  const sx={
        display: "flex",
        justifyContent: "center", 
        alignItems: "center",    
        height: "100vh" ,
        bgcolor: "#f0f0f0",
      }

      const renderContent = () => {
        if (weather.cod === "404") {
          return <Error />;
        } else  {
          return <Description />;
        }
       
      };
      
  

  return (
    <>
       <Box
      sx={sx}
    >
      <Card sx={{ minWidth: 275, padding: 1, textAlign: "right" }}>

        <CardContent sx={{padding:0}}>

             <Search />
             <Localdate />
              {renderContent()}
            
        </CardContent>
        <div style={{width:'100%',display:'flex',}} ><ButtonLung /></div>
        
      </Card>
      
    </Box>
    
    </>
  )
}

export default App

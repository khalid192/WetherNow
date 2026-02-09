
import { Box, Card, CardContent, } from "@mui/material";


import Search from "./search";
import Localdate from "./localdate";
import Description from "./description";
import ButtonLung from "./buttonlung";

import Error from "./erorre";
import Add from "./add";
import Card5days from "./card5days";

import { useContext } from "react";
import { IPContext } from "./context/contextIP.jsx";

import sky from "./wethers_icone/sky.jpg"

function App() {

  const { weather,  } = useContext(IPContext);

  const sx={
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", 
        alignItems: "center",    
        height: "100vh" ,
        fontFamily: "Inter, sans-serif",
        width:"100vw",
 
      }
     

      const renderContent = () => {
        if (weather.cod === "404") {
          return <Error />;
        }else if (weather.cod === "400") {
          return <Add />;
        }
         else  {
          return <Description />;
        }
       
      };
      
  

  return (
    <>
       <Box
      sx={sx}
       style={{backgroundImage: `url(${sky})`, backgroundSize: "cover", backgroundPosition: "center", }}  
    > 
    
     <Card5days/> 
      
      <Card sx={{ minWidth: 275, padding: 1, textAlign: "right",backdropFilter: "blur(10px)", backgroundColor: "rgba(255, 255, 255, 0.3)", borderRadius: "15px" }}>

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


import { Typography } from "@mui/material";
import {useContext} from "react"
import {IPContext} from "./context/contextIP.jsx"


export default function Localdate() {

const {weather,date} = useContext(IPContext)




    
  return (

     <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <Typography variant="h7">{weather?.sys?.country  ||null} {weather?.name || "Location Unknown"} </Typography>
          <Typography variant="h9">{date}</Typography>
          </div>
  )
}
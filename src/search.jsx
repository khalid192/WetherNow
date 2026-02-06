
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import SearchIcon from '@mui/icons-material/Search';
import { useState , useContext } from 'react';
import {IPContext} from "./context/contextIP.jsx"


export default function Search() {
    
  const {setAddress,lung} = useContext(IPContext)
  const [city, setCity] = useState('');

   function handleChange(e){
    setCity(e.target.value)
   }

   function handleClick(){
    if(city.trim() !== '') {
    setAddress(city)
    setCity('')}
   }
   
const dr=lung==="en" ? "ltr" : "rtl"
const dm=lung==="en" ? "write a city" : "اكتب اسم المدينة"

  return (
    <div style={{ display: "flex" }}>
      <TextField
        label={dm}
        variant="standard"

        size="small"

        sx={{ mb: 2, width: "100%",direction:dr, ml: 0.5 , "& .MuiInputLabel-root": {
      right: lung === "ar" ? 0 : "auto",
      left: lung === "ar" ? "auto" : 0,
      transformOrigin: lung === "ar" ? "top right" : "top left"}}}


  

        onChange={handleChange}
        value={city}
      />
      <Fab 
        aria-label="search"
        size="small"
        sx={{ mb: 2, ml: 1, mt: 0.6, boxShadow: 0, width: 48, height: 40 }}
       onClick={handleClick}
      >
        <SearchIcon />
      </Fab>
    </div>
  );
}

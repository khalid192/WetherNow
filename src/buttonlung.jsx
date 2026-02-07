import Button from '@mui/material/Button';
import AutorenewIcon from '@mui/icons-material/Autorenew';

import {useContext} from "react"
import {IPContext} from "./context/contextIP.jsx"


export default function ButtonLung() {

    const {lung,setlung} = useContext(IPContext)
    function Bb(){
       setlung(lung === "en" ? "ar" : "en")
    }

  return <>
      <Button variant="outlined" onClick={Bb} size='small'  style={{color:'#575454',}} startIcon={<AutorenewIcon />}>
        {lung === "en" ? "ar" : "en"}
      </Button>

  </>
  
}
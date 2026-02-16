import Button from '@mui/material/Button';
import AutorenewIcon from '@mui/icons-material/Autorenew';

import {useContext} from "react"
import {IPContext} from "./context/contextIP.jsx"


export default function ButtonLung() {

    const {lung,Bb} = useContext(IPContext)


  return <>
      <Button variant="outlined" onClick={Bb} size='small'  style={{color:'#313030',    borderColor: "#4f4d4d96",}}>
        {lung === "en" ? "ar" : "en"}
      </Button>

  </>
  
}
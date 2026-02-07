
import { useContext } from "react";
import { IPContext } from "./context/contextIP.jsx";


export default function Error() {
    const {lung} = useContext(IPContext)

        const message = lung === "en" ? "City not found" : "المدينة غير موجودة";



  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "150px" }}>
      <h1 style={{ color: "#231818b0" ,  fontFamily: "Montserrat, sans-serif"}}>{message}</h1>
    </div>
  );
}
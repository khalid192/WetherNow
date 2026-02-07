
import { useContext } from "react";
import { IPContext } from "./context/contextIP.jsx";


export default function Add() {
    const {lung} = useContext(IPContext)

        const message = lung === "en" ? "Add a city" : "أضف مدينة";



  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "150px" }}>
      <h1 style={{ color: "#110c0ca9" }}>{message}</h1>
    </div>
  );
}
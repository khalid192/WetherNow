

import { useContext } from "react";
import { IPContext } from "./context/contextIP.jsx";

export default function Icone() {
  const {weatherIcone,iconCode} = useContext(IPContext)

  return (
    <>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={weatherIcone[iconCode]} width={140} alt="weather icon" />
      </div>
    </>
  );
}

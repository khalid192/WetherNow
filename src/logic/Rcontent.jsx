import Description from "../description";
import Error from "../erorre";
import Add from "../Add";





export function Rcontent(weather) {

      if (weather.cod === "404") {
        return <Error />;
      } else if (weather.cod === "400") {
        return <Add />;
      } else {
        return <Description />;
      }


}
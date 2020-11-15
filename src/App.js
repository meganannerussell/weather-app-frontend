import "./App.css";
import axios from "axios";
import { useState } from "react";
import { InputForm } from "./components/inputForm";
import icon from "./assets/icon.svg";
import runtimeEnv from "@mars/heroku-js-runtime-env"
// import { Forecast } from "./components/forecast";
// import forecast from "../../server/utils/Forecast";

const env = runtimeEnv()
export const apiBaseUrl = env.REACT_APP_API_URL || "http://localhost:5000";

function App() {
  const [temperature, setTemperature] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchWeather = async (location) => {
    setIsLoading(true)
    const response = await axios.get(
      `${apiBaseUrl}/weather?address=` + location
    );
    const forecast = await response.data;
    setIsLoading(false)
    return forecast;
  };

  const handleSubmit = async (location) => {
    if (!location) {
      console.log("no location");
    }

    try {
      const forecast = await fetchWeather(location);
      // setIsLoading(false)
      setTemperature(forecast);
      console.log(forecast);
      // console.log(response);
    } catch (error) {
      console.log(error);
      // setError("location cannot be found, try again.")
      // setTemperature('address does not exist, try again')
    }
  };

  return (
    <div className="App">
      <div style={{paddingTop:30}}>
        <img style={{ width: 200 }} alt="img" src={icon} />
      </div>
    <h1 style={{paddingBottom:20}}>Current Weather Forecast</h1>
      <InputForm
        handleSubmit={handleSubmit}
        temperature={temperature}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;

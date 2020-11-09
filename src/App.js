import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { InputForm } from "./components/inputForm";
import icon from "./assets/icon.svg";
// import { Forecast } from "./components/forecast";
// import forecast from "../../server/utils/Forecast";

function App() {
  const [temperature, setTemperature] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   (async (location) => {
  //      await fetchWeather(location);
  //     setIsLoading(false);
  //   })();
  // }, []);

  const fetchWeather = async (location) => {
    const response = await axios.get(
      "http://localhost:5000/weather?address=" + location
    );
    const forecast = await response.data;
    // setIsLoading(true)
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
      <div style={{padding:30}}>
        <img style={{ width: 200 }} alt="img" src={icon} />
      </div>

      <InputForm
        handleSubmit={handleSubmit}
        temperature={temperature}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;

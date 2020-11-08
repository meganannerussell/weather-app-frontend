import "./App.css";
import axios from "axios";
import { useState } from "react";
import { InputForm } from "./components/inputForm";
import { Forecast } from "./components/forecast";

function App() {
  const [temperature, setTemperature] = useState("");

  const handleSubmit = async (location) => {
    console.log("hwlloooooooooooo");
    try {
      const response = await axios.get("http://localhost:5000/weather?address=" + location);
      const forecast = await response.data;
      setTemperature(forecast);
      // return forecast;
      console.log(forecast);
    } catch (error) {
      console.log(error, "there is error");
    }
  };

  // const getWeather = () => {};

  return (
    <div className="App">
      hello
      <InputForm handleSubmit={handleSubmit} temperature={temperature} />
      <Forecast />
    </div>
  );
}

export default App;

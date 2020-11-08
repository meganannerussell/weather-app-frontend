import React, { useState } from "react";

export const Forecast = () => {
  const [responseObj, setResponseObj] = useState({});

  const getForecast = async() => {
    fetch(
      "https://community-open-weather-map.p.rapidapi.com/find?q=Cape%20Town&cnt=0&mode=null&lon=0&type=link%2C%20accurate&lat=0&units=imperial%2C%20metric",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "7c65dcd63cmsh7f1bd88a23f2e62p16cba6jsn4b4984983407",
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        },
      }
    )

// const data = await response.json()

      .then((response) => response.json())
      .then((response) => {
        setResponseObj(response);
      })
      // .then((response) => {
      //   console.log(response);
      // })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <h2>Find Current Weather Conditions</h2>
      <div>{JSON.stringify(responseObj)}</div>
      <button onClick={getForecast}>Get Forecast</button>
    </div>
  );
};

import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Input } from "semantic-ui-react";

export const InputForm = ({ handleSubmit, temperature, isLoading }) => {
  const [location, setLocation] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(location);
        setLocation("");
      }}
    >
      <Input
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Cape Town"
        value={location}
        style={{ width: 300 }}
      ></Input>
      <button class="ui primary button">Search</button>
      {isLoading ? (
        <div>...loading</div>
      ) : (
        <div style={{ padding: 20, fontFamily: "unset", fontSize: 16 }}>
          {temperature && temperature.forecast
            ? temperature.forecast.temperature || temperature.forecast.error
            : null}
        </div>
      )}
    </form>
  );
};

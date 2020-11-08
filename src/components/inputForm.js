import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Input, Button } from "semantic-ui-react";

export const InputForm = ({ handleSubmit, temperature }) => {
  const [location, setLocation] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(location);
      }}
    >
      <Input
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Cape Town"
        value={location}
      ></Input>
      <Button>go</Button>
      <div>
        {temperature &&
          temperature.forecast &&
          temperature.forecast.temperature}
      </div>
    </form>
  );
};

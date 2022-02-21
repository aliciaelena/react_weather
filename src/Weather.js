import axios from "axios";
import React from "react";

export default function Weather(props) {
  let apiKey = "6a119ce5ad60b9883a83a56308bcd89c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemp);

  function showTemp(response) {
    alert(
      `It is ${Math.round(response.data.main.temp)}°C degrees in ${props.city}`
    );
  }
  return <h1>Hello Worldtravellers</h1>;
}

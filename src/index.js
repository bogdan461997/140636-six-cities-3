import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const PLACES_COUNT = 312;
const PLACES_IN_CITY = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
  `Wood and stone place`,
];
ReactDOM.render(
    <App placesCount={PLACES_COUNT} placesInCity={PLACES_IN_CITY} />,
    document.getElementById(`root`)
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const PLACES_IN_CITY = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
  `Wood and stone place`,
];

ReactDOM.render(
    <App placesInCity={PLACES_IN_CITY} />,
    document.getElementById(`root`)
);

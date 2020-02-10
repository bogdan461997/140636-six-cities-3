import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const placesCount = 312;

ReactDOM.render(
    <App placesCount={placesCount} />,
    document.getElementById(`root`)
);

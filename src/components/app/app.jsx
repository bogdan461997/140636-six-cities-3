import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  return <Main placesCount={props.placesCount} />;
};

export default App;

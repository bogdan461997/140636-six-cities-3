import React from "react";
import Main from "../main/main.jsx";
import PropTypes from 'prop-types';

const App = ({placesInCity}) => {
  return <Main placesInCity={placesInCity}/>;
};

App.propTypes = {
  placesInCity: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;

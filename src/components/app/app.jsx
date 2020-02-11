import React from "react";
import Main from "../main/main.jsx";
import PropTypes from 'prop-types';

const App = ({placesCount, placesInCity}) => {
  return <Main placesCount={placesCount} placesInCity={placesInCity}/>;
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
  placesInCity: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;

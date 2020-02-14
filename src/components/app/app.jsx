import React from "react";
import Main from "../main/main.jsx";
import PropTypes from 'prop-types';

const cardNameClickHandler = () => { };


const App = ({placesInCity}) => {
  return (
    <Main
      onCardNameClick={cardNameClickHandler}
      placesInCity={placesInCity}
    />
  );
};

App.propTypes = {
  placesInCity: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;

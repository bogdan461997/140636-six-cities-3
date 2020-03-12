import React from "react";
import Main from "../main/main.jsx";
import PropTypes from 'prop-types';

const App = ({offers}) => {
  return (
    <Main
      onCardNameClick={() => { }}
      offers={offers}
    />
  );
};

App.propTypes = {
  offers: PropTypes.array.isRequired
};

export default App;

import React from 'react';
import PropTypes from 'prop-types';
import PlacesList from '../places-list/places-list.jsx';

const PlacesListMain = ({offers, onCardNameClick}) => {
  return (
    <div className="cities__places-list places__list tabs__content">
      <PlacesList offers={offers} onCardNameClick={onCardNameClick}></PlacesList>
    </div>
  );
};

PlacesListMain.propTypes = {
  offers: PropTypes.array.isRequired,
  onCardNameClick: PropTypes.func,
};

export default PlacesListMain;

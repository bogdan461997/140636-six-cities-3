import React from 'react';
import PropTypes from 'prop-types';
import PlacesList from '../places-list/places-list.jsx';

const PlacesListNearby = ({offers, onCardNameClick}) => {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        <PlacesList
          offers={offers}
          onCardNameClick={onCardNameClick}
        />
      </div>
    </section>
  );
};

PlacesListNearby.propTypes = {
  offers: PropTypes.array,
  onCardNameClick: PropTypes.func,
};

export default PlacesListNearby;

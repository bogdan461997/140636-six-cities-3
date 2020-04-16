import React from 'react';
import PropTypes from 'prop-types';
import cities from '../../mocks/cities';

const Locations = ({onCityClick, currentCity}) => (
  <ul className="locations__list tabs__list">
    {
      cities.map((city) => (
        <li key={city} className="locations__item">
          <a className={`locations__item-link tabs__item ` + (currentCity === city ? `tabs__item--active` : ``) } onClick={() => onCityClick(city)} href="#">
            <span>{city}</span>
          </a>
        </li>
      ))
    }
  </ul>);

Locations.propTypes = {
  onCityClick: PropTypes.func.isRequired,
  currentCity: PropTypes.string.isRequired
};

export default Locations;

import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selecdPlaceCard: null,
    };
  }

  render() {
    const {offers, onCardNameClick} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer, index) => (
          <PlaceCard
            key={offer.id + index}
            offer={offer}
            onCardNameClick={onCardNameClick}
            onPlaceCardMouseOver={
              (value) => {
                this.setState({
                  selecdPlaceCard: value,
                });
              }}
          />))}
      </div>
    );
  }
}

PlacesList.propTypes = {
  offers: PropTypes.array.isRequired,
  onCardNameClick: PropTypes.func.isRequired
};

export default PlacesList;

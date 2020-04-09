import React from "react";
import PropTypes from 'prop-types';
import Review from "../review/review.jsx";
import PlacesListNearby from '../places-list-nearby/places-list-nearby.jsx';
import Map from '../map/map.jsx';

const Offer = ({offer, offers = [], onCardNameClick}) => {
  return (
    <section className="property">
      <div className="property__gallery-container container">
        <div className="property__gallery">
          {offer.images.map((value, index) => {
            return (
              <div key={value + index} className="property__image-wrapper">
                <img className="property__image" src={value} alt="Photo studio" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="property__container container">
        <div className="property__wrapper">
          {getPlaceCardMark(offer.isPremium)}
          <div className="property__name-wrapper">
            <h1 className="property__name">
              {offer.title}
            </h1>
            <button className="property__bookmark-button button" type="button">
              <svg className="property__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="property__rating rating">
            <div className="property__stars rating__stars">
              <span style={{width: Math.floor(offer.rating) * 20 + `%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="property__rating-value rating__value">{offer.rating}</span>
          </div>
          <ul className="property__features">
            <li className="property__feature property__feature--entire">
              {offer.type}
            </li>
            <li className="property__feature property__feature--bedrooms">
              {offer.bedrooms} Bedrooms
            </li>
            <li className="property__feature property__feature--adults">
              Max {offer.maxAdults} adults
            </li>
          </ul>
          <div className="property__price">
            <b className="property__price-value">&euro;{offer.price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>
            <ul className="property__inside-list">
              {offer.goods.map((value, index) => (
                <li key={value + index} className="property__inside-item">
                  {value}
                </li>
              ))}
            </ul>
          </div>
          <div className="property__host">
            <h2 className="property__host-title">Meet the host</h2>
            <div className="property__host-user user">
              <div className={`property__avatar-wrapper user__avatar-wrapper` + (offer.host.isPro ? `property__avatar-wrapper--pro` : ``)}>
                <img className="property__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
              </div>
              <span className="property__user-name">
                {offer.host.name}
              </span>
            </div>
            <div className="property__description">
              <p className="property__text">
                {offer.description}
              </p>
            </div>
          </div>
          <Review></Review>
        </div>
      </div>
      <section className="property__map map">
        <Map offers={offers.slice(1)} activeOffers={[offers[0]]} ></Map>
      </section>
      <div className="container">
        <PlacesListNearby
          offers={offers}
          onCardNameClick={onCardNameClick}
        ></PlacesListNearby>
      </div>
    </section>
  );
};

Offer.propTypes = {
  offer: PropTypes.shape({
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    previewImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    goods: PropTypes.arrayOf(PropTypes.string),
    host: PropTypes.shape({
      avatarUrl: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isPro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    }),
    id: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
    maxAdults: PropTypes.number.isRequired,
  }),
  offers: PropTypes.array.isRequired,
  onCardNameClick: PropTypes.func,
};

function getPlaceCardMark(isPremium) {
  if (isPremium) {
    return (
      <div className="property__mark">
        <span>Premium</span>
      </div>
    );
  }

  return null;
}

export default Offer;

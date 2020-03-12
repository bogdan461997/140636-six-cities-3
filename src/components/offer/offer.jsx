import React from "react";
import PropTypes from 'prop-types';

const Offer = ({offer}) => {
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
          <section className="property__reviews reviews">
            <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
            <ul className="reviews__list">
              <li className="reviews__item">
                <div className="reviews__user user">
                  <div className="reviews__avatar-wrapper user__avatar-wrapper">
                    <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar" />
                  </div>
                  <span className="reviews__user-name">
                    Max
                  </span>
                </div>
                <div className="reviews__info">
                  <div className="reviews__rating rating">
                    <div className="reviews__stars rating__stars">
                      <span style={{width: `80%`}}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <p className="reviews__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
                </div>
              </li>
            </ul>
            <form className="reviews__form form" action="#" method="post">
              <label className="reviews__label form__label" htmlFor="review">Your review</label>
              <div className="reviews__rating-form form__rating">
                <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" />
                <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>

                <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" />
                <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>

                <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" />
                <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>

                <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" />
                <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>

                <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" />
                <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>
              </div>
              <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
              <div className="reviews__button-wrapper">
                <p className="reviews__help">
                  To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                </p>
                <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
              </div>
            </form>
          </section>
        </div>
      </div>
      <section className="property__map map"></section>
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
  })
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

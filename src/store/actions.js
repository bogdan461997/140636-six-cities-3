import offers from "../mocks/offers";
import ACTIONS from './actiontypes';

export default {
  changeCity: (city) => ({
    type: ACTIONS.CHANGE_CITY,
    payload: city,
  }),
  getOffers: (city) => {
    return {
      type: ACTIONS.GET_OFFERS,
      payload: offers.filter((offer) => offer.city.name === city),
    };
  }
};

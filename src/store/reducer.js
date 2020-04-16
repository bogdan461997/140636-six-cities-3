import offers from '../mocks/offers.js';
import ACTIONS from './actiontypes';

const initialState = {
  currentCity: `Amsterdam`,
  currentOffers: offers,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.CHANGE_CITY:
      return Object.assign({}, state, {currentCity: action.payload});
    case ACTIONS.GET_OFFERS:
      return Object.assign({}, state, {currentOffers: action.payload});
    default:
      return state;
  }
}

export default rootReducer;

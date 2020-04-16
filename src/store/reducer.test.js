import reducer from './reducer.js';
import actionTypes from './actiontypes.js';
import actionCreator from './actions.js';

const offers = [
  {
    bedrooms: 3,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 3,
      isPro: true,
      name: `Angelina`
    },
    id: 1,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/studio-01.jpg`],
    isFavorite: false,
    isPremium: true,
    maxAdults: 4,
    previewImage: `img/apartment-01.jpg`,
    price: 120,
    rating: 4.8,
    title: `Beautiful & luxurious studio at great location`,
    type: `apartment`,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },
  },
  {
    bedrooms: 3,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 3,
      isPro: false,
      name: `Angelina`
    },
    id: 2,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/studio-01.jpg`],
    isFavorite: false,
    isPremium: false,
    maxAdults: 4,
    previewImage: `img/room.jpg`,
    price: 80,
    rating: 3.1,
    title: `Wood and stone place`,
    type: `Private room`,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },
  },
  {
    bedrooms: 3,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 3,
      isPro: true,
      name: `Angelina`
    },
    id: 3,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/studio-01.jpg`],
    isFavorite: false,
    isPremium: false,
    maxAdults: 4,
    previewImage: `img/apartment-02.jpg`,
    price: 132,
    rating: 4.4,
    title: `Canal View Prinsengracht`,
    type: `Apartment`,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
    },
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },
  },
  {
    bedrooms: 3,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 3,
      isPro: true,
      name: `Angelina`
    },
    id: 4,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/studio-01.jpg`],
    isFavorite: false,
    isPremium: true,
    maxAdults: 4,
    previewImage: `img/apartment-03.jpg`,
    price: 180,
    rating: 5,
    title: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Cologne`
    },
  },
  {
    bedrooms: 3,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 3,
      isPro: true,
      name: `Angelina`
    },
    id: 4,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/studio-01.jpg`],
    isFavorite: false,
    isPremium: true,
    maxAdults: 4,
    previewImage: `img/apartment-03.jpg`,
    price: 180,
    rating: 5,
    title: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Brussels`
    },
  },
  {
    bedrooms: 3,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 3,
      isPro: true,
      name: `Angelina`
    },
    id: 4,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/studio-01.jpg`],
    isFavorite: false,
    isPremium: true,
    maxAdults: 4,
    previewImage: `img/apartment-03.jpg`,
    price: 180,
    rating: 5,
    title: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Hamburg`
    },
  },
  {
    bedrooms: 3,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 3,
      isPro: true,
      name: `Angelina`
    },
    id: 4,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/studio-01.jpg`],
    isFavorite: false,
    isPremium: true,
    maxAdults: 4,
    previewImage: `img/apartment-03.jpg`,
    price: 180,
    rating: 5,
    title: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Dusseldorf`
    },
  },
  {
    bedrooms: 3,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 3,
      isPro: true,
      name: `Angelina`
    },
    id: 4,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/studio-01.jpg`],
    isFavorite: false,
    isPremium: true,
    maxAdults: 4,
    previewImage: `img/apartment-03.jpg`,
    price: 180,
    rating: 5,
    title: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Dusseldorf`
    },
  },
  {
    bedrooms: 3,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 3,
      isPro: true,
      name: `Angelina`
    },
    id: 4,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/studio-01.jpg`],
    isFavorite: false,
    isPremium: true,
    maxAdults: 4,
    previewImage: `img/apartment-03.jpg`,
    price: 180,
    rating: 5,
    title: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Dusseldorf`
    },
  },
  {
    bedrooms: 3,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 3,
      isPro: true,
      name: `Angelina`
    },
    id: 4,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/studio-01.jpg`],
    isFavorite: false,
    isPremium: true,
    maxAdults: 4,
    previewImage: `img/apartment-03.jpg`,
    price: 180,
    rating: 5,
    title: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Dusseldorf`
    },
  },
];

it(`Reducer without additionl parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    currentCity: `Amsterdam`,
    currentOffers: offers,
  });
});

it(`Reducer should change city by given value`, () => {
  expect(reducer({
    currentCity: `Amsterdam`
  }, {
    type: actionTypes.CHANGE_CITY,
    payload: `Kursk`
  })).toEqual({
    currentCity: `Kursk`
  });
});

it(`Reducer should change offers by given value`, () => {
  expect(reducer({
    currentCity: `Brussels`,
    currentOffers: offers,
  }, {
    type: actionTypes.GET_OFFERS,
    payload: offers.filter((x) => x.city.name === `Brussels`)
  })).toEqual({
    currentCity: `Brussels`,
    currentOffers: [{
      bedrooms: 3,
      description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
      goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
      host: {
        avatarUrl: `img/avatar-angelina.jpg`,
        id: 3,
        isPro: true,
        name: `Angelina`
      },
      id: 4,
      images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/studio-01.jpg`],
      isFavorite: false,
      isPremium: true,
      maxAdults: 4,
      previewImage: `img/apartment-03.jpg`,
      price: 180,
      rating: 5,
      title: `Nice, cozy, warm big bed apartment`,
      type: `Apartment`,
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 8
      },
      city: {
        location: {
          latitude: 52.370216,
          longitude: 4.895168,
          zoom: 10
        },
        name: `Brussels`
      },
    }]
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for changing city should return action with changed city`, () => {
    expect(actionCreator.changeCity(`Amsterdam`)).toEqual({
      type: actionTypes.CHANGE_CITY,
      payload: `Amsterdam`
    });
  });

  it(`Action creator for getting offers should return action with new offers`, () => {
    expect(actionCreator.getOffers(`Brussels`)).toEqual({
      type: actionTypes.GET_OFFERS,
      payload: [{
        bedrooms: 3,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        host: {
          avatarUrl: `img/avatar-angelina.jpg`,
          id: 3,
          isPro: true,
          name: `Angelina`
        },
        id: 4,
        images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/studio-01.jpg`],
        isFavorite: false,
        isPremium: true,
        maxAdults: 4,
        previewImage: `img/apartment-03.jpg`,
        price: 180,
        rating: 5,
        title: `Nice, cozy, warm big bed apartment`,
        type: `Apartment`,
        location: {
          latitude: 52.3809553943508,
          longitude: 4.939309666406198,
          zoom: 8
        },
        city: {
          location: {
            latitude: 52.370216,
            longitude: 4.895168,
            zoom: 10
          },
          name: `Brussels`
        },
      }]
    });
  });
});

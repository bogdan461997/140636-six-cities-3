import React from 'react';
import renderer from 'react-test-renderer';
import PlacesListNearby from './places-list-nearby.jsx';

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
    type: `apartment`
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
    type: `Private room`
  },
];

it(`PlacesList is rendered correctly`, () => {
  const tree = renderer.create(
      <PlacesListNearby
        offers={offers}
        onCardNameClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

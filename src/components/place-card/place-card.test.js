import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';

const offer = {
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
  rating: 4.3,
  title: `Beautiful & luxurious studio at great location`,
  type: `apartment`
};

it(`PlaceCard is rendered correctly`, () => {
  const tree = renderer.create(
      <PlaceCard
        offer={offer}
        onCardNameClick={() => {}}
        onPlaceCardMouseOver={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

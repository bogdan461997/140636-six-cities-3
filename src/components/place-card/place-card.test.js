import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';

const offer = {
  price: 120,
  priceText: `night`,
  rating: 80,
  isPremium: true,
  picture: `img/apartment-01.jpg`,
  name: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`,
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

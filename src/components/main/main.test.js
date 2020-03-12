import React from 'react';
import Main from './main.jsx';
import renderer from 'react-test-renderer';

it(`Main renders correctly`, () => {
  const offers = [
    {
      price: 120,
      priceText: `night`,
      rating: 80,
      isPremium: true,
      picture: `img/apartment-01.jpg`,
      name: `Beautiful & luxurious apartment at great location`,
      type: `Apartment`,
    }
  ];

  const tree = renderer
    .create(
        <Main
          offers={offers}
          onCardNameClick={() => { }}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

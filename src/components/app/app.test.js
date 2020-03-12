import React from 'react';
import App from './app.jsx';
import renderer from 'react-test-renderer';

it(`App renders correctly`, () => {
  const offers = [
    {
      price: 120,
      priceText: `night`,
      rating: 80,
      isPremium: true,
      picture: `img/apartment-01.jpg`,
      name: `Beautiful & luxurious apartment at great location`,
      type: `Apartment`,
    },
    {
      price: 132,
      priceText: `night`,
      rating: 80,
      isPremium: false,
      picture: `img/apartment-02.jpg`,
      name: `Canal View Prinsengracht`,
      type: `Apartment`,
    },
  ];

  const tree = renderer
    .create(<App offers={offers}></App>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

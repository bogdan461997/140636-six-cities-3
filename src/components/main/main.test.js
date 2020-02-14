import React from 'react';
import Main from './main.jsx';
import renderer from 'react-test-renderer';

it(`Main renders correctly`, () => {
  const placesInCity = [`Canal View Prinsengracht`, `Wood and stone place`];

  const tree = renderer
    .create(
        <Main
          placesInCity={placesInCity}
          onCardNameClick={() => { }}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

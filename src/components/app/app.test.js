import React from 'react';
import App from './app.jsx';
import renderer from 'react-test-renderer';

it(`App renders correctly`, () => {
  const placesInCity = [`Nice, cozy, warm big bed apartment`, `Wood and stone place`];
  
  const tree = renderer
    .create(<App placesInCity={placesInCity}></App>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

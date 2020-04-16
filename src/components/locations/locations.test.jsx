import React from 'react';
import renderer from 'react-test-renderer';
import Locations from './locations.jsx';

it(`Locations is rendered correctly`, () => {
  const tree = renderer.create(
      <Locations
        onCityClick={() => {}}
        currentCity={`Hamburg`}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

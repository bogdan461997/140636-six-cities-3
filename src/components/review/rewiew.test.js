import React from 'react';
import renderer from 'react-test-renderer';
import Review from './review.jsx';

it(`Review is rendered correctly`, () => {
  const tree = renderer.create(
      <Review />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

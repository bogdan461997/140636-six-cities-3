import React from 'react';
import App from './app.jsx';
import renderer from 'react-test-renderer';

it(`App renders correctly`, () => {
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

  const tree = renderer
    .create(<App offers={offers}></App>, {
      createNodeMock: () => {
        return document.createElement(`div`);
      }})
    .toJSON();

  expect(tree).toMatchSnapshot();
});

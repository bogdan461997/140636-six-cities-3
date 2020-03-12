import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlacesList from './places-list.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`State should change when mouse is over place-card`, () => {

  const offers = [
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

  const placesList = mount(
      <PlacesList
        offers={offers}
        onCardNameClick={() => {}}
      />
  );

  placesList.find(`article.place-card`).simulate(`mouseover`, {preventDefault() {}});

  expect(placesList.state().selecdPlaceCard).toMatchObject(offers[0]);
});

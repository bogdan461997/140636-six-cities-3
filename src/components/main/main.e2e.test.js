import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should card names be pressed`, () => {
  const onCardNameClick = jest.fn();

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

  const main = mount(
      <Main
        onCardNameClick={onCardNameClick}
        offers={offers}
      />
  );

  const titles = main.find(`.place-card__name`);

  titles.forEach((title) => title.props().onClick());

  expect(onCardNameClick.mock.calls.length).toBe(offers.length);
});

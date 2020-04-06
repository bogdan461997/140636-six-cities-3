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
      id: 1,
      city: {
        name: `Amsterdam`,
        location: {
          latitude: 52.370216,
          longitude: 4.895168,
          zoom: 10
        }
      },
      previewImage: `img/apartment-01.jpg`,
      images: [`img/apartment-02.jpg`, `img/apartment-03.jpg`],
      title: `Beautiful & luxurious studio at great location`,
      isFavorite: false,
      isPremium: false,
      rating: 1.8,
      type: `apartment`,
      bedrooms: 3,
      maxAdults: 4,
      price: 100,
      goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
      host: {
        id: 3,
        isPro: true,
        name: `Angelina`,
        avatarUrl: `img/avatar-angelina.jpg`
      },
      description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    {
      id: 2,
      city: {
        name: `Amsterdam`,
        location: {
          latitude: 52.370216,
          longitude: 4.895168,
          zoom: 10
        }
      },
      previewImage: `img/apartment-02.jpg`,
      images: [`img/apartment-01.jpg`, `img/apartment-03.jpg`],
      title: `Beautiful & luxurious studio at great location`,
      isFavorite: false,
      isPremium: false,
      rating: 2.8,
      type: `room`,
      bedrooms: 2,
      maxAdults: 4,
      price: 140,
      goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
      host: {
        id: 3,
        isPro: true,
        name: `Angelina`,
        avatarUrl: `img/avatar-angelina.jpg`
      },
      description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 8
      }
    },
    {
      id: 3,
      city: {
        name: `Paris`,
        location: {
          latitude: 52.370216,
          longitude: 4.895168,
          zoom: 10
        }
      },
      previewImage: `img/apartment-02.jpg`,
      images: [`img/apartment-01.jpg`, `img/apartment-03.jpg`],
      title: `Beautiful & luxurious studio at great location`,
      isFavorite: false,
      isPremium: false,
      rating: 4.8,
      type: `room`,
      bedrooms: 2,
      maxAdults: 4,
      price: 120,
      goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
      host: {
        id: 3,
        isPro: true,
        name: `Angelina`,
        avatarUrl: `img/avatar-angelina.jpg`
      },
      description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 8
      }
    }
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

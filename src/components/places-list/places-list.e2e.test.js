import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlacesList from "./places-list.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`State should change when mouse is over place-card`, () => {

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

  const placesList = mount(
      <PlacesList
        offers={offers}
        onCardNameClick={() => {}}
      />
  );

  placesList.find(`article.place-card`).simulate(`mouseover`, {preventDefault() {}});

  expect(placesList.state().selecdPlaceCard).toMatchObject(offers[0]);
});

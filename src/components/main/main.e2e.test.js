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

import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should card names be pressed`, () => {
  const onCardNameClick = jest.fn();

  const PLACES_IN_CITY = [
    `Beautiful & luxurious apartment at great location`,
    `Wood and stone place`,
    `Canal View Prinsengracht`,
  ];

  const main = shallow(
      <Main
        onCardNameClick={onCardNameClick}
        placesInCity={PLACES_IN_CITY}
      />
  );

  const titles = main.find(`.place-card__name`);

  titles.forEach((title) => title.props().onClick());

  expect(onCardNameClick.mock.calls.length).toBe(PLACES_IN_CITY.length);
});

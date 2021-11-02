"use strict";

import { Ship } from "./modules/ship";

// Testing ship factory
test("test that ship factory produces ship of correct length", () => {
  // given
  const testShip = Ship(3);

  // when
  const result = testShip.getLength();

  // then
  expect(result).toEqual(3);
});

test("test that ship records hit at a position", () => {
  // given
  const testShip = Ship(3);

  // when
  testShip.hit(1);

  //then
  expect(testShip.getShip()).toEqual(["", "x", ""]);
});

test("test that ship doesn't record hit outside of length", () => {
  // given
  const testShip = Ship(3);

  // when
  testShip.hit(4);

  //then
  expect(testShip.getShip()).not.toEqual(["", "", "", "", "x"]);
});

test("test that ship factory reports when sunk", () => {
  // given
  const testShip = Ship(2);

  // when
  testShip.hit(0);
  testShip.hit(1);

  const result = testShip.isSunk();

  //then
  expect(result).toEqual(true);
});

test("test that ship factory reports when not sunk", () => {
  // given
  const testShip = Ship(2);

  // when
  testShip.hit(0);

  const result = testShip.isSunk();

  //then
  expect(result).toEqual(false);
});

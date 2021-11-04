"use strict";

import { Ship } from "./modules/ship";
import { Gameboard } from "./modules/gameboard";

////////////////////////////////////////////////////

// Testing ship factory

test.skip("test that ship factory produces ship of correct length", () => {
  // given
  const testShip = Ship(3);

  // when
  const result = testShip.getLength();

  // then
  expect(result).toEqual(3);
});

test.skip("test that ship records hit at a position", () => {
  // given
  const testShip = Ship(3);

  // when
  testShip.hit(1);

  //then
  expect(testShip.getShip()).toEqual(["", "x", ""]);
});

test.skip("test that ship doesn't record hit outside of length", () => {
  // given
  const testShip = Ship(3);

  // when
  testShip.hit(4);

  //then
  expect(testShip.getShip()).not.toEqual(["", "", "", "", "x"]);
});

test.skip("test that ship factory reports when sunk", () => {
  // given
  const testShip = Ship(2);

  // when
  testShip.hit(0);
  testShip.hit(1);

  const result = testShip.isSunk();

  //then
  expect(result).toEqual(true);
});

test.skip("test that ship factory reports when not sunk", () => {
  // given
  const testShip = Ship(2);

  // when
  testShip.hit(0);

  const result = testShip.isSunk();

  //then
  expect(result).toEqual(false);
});

////////////////////////////////////////////////

// Testing Gameboard factory
test("can place ships on gameboard", () => {
  // given
  const board = Gameboard();
  const carrier = Ship(5);
  board.placeShip(carrier, "v", [3, 3]);

  // when
  const result = carrier.getPosition().length;

  // then
  expect(result).toBeGreaterThan(0);
});

test("can't place ships outside 10 x 10 gameboard", () => {
  // given
  const board = Gameboard();
  const carrier = Ship(5);
  board.placeShip(carrier, "v", [11, 15]);

  // when
  const result = carrier.getPosition().length;

  // then
  expect(result).toEqual(0);
});

test("can't place ships off edge of gameboard", () => {
  // given
  const board = Gameboard();
  const carrier = Ship(5);
  board.placeShip(carrier, "v", [3, 7]);

  // when
  const result = carrier.getPosition().length;

  // then
  expect(result).toEqual(0);
});

test("can't place overlapping ships", () => {
  // given
  const board = Gameboard();
  const carrier = Ship(5);
  const battleship = Ship(4);
  board.placeShip(carrier, "v", [3, 3]);
  board.placeShip(battleship, "h", [3, 3]);

  // when
  const result = battleship.getPosition().length;

  // then
  expect(result).toEqual(0);
});

test("hits are stored on ship object", () => {
  // given
  const board = Gameboard();
  const carrier = Ship(5);
  board.placeShip(carrier, "v", [3, 3]);
  board.receiveAttack([3, 5]);

  // when

  const result = carrier.getHits().length;

  // then
  expect(result).toBeGreaterThan(0);
});

test("checksAllShipsSunk returns false if not all ships sunk", () => {
  // given
  const board = Gameboard();
  const patrol = Ship(2);
  board.placeShip(patrol, "v", [3, 3]);
  board.receiveAttack([3, 3]);

  // when
  const result = board.checkAllShipsSunk();

  // then
  expect(result).toBeFalsy();
});

test("checksAllShipsSunk returns true if all ships sunk", () => {
  // given
  const board = Gameboard();
  const patrol = Ship(2);
  board.placeShip(patrol, "v", [3, 3]);
  board.receiveAttack([3, 3]);
  board.receiveAttack([3, 4]);

  // when
  const result = board.checkAllShipsSunk();

  // then
  expect(result).toBeTruthy();
});

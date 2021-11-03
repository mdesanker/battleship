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
test("gameboard produces 10 x 10 array", () => {
  // given
  const board = Gameboard();

  // when
  const result = board.printBoard();

  // then
  expect(result.length).toEqual(10);
  expect(result[0].length).toEqual(10);
});

test("place ship object on board", () => {
  // given
  const board = Gameboard();
  const destroyer = Ship(3);

  // when
  board.placeShip(destroyer, "h", [2, 2]);

  // then
  expect(board.getShipCoords().length).toEqual(3);
});

test("don't place overlapping ship on board", () => {
  // given
  const board = Gameboard();
  const destroyer = Ship(3);
  const carrier = Ship(5);

  // when
  board.placeShip(destroyer, "h", [3, 3]);
  board.placeShip(carrier, "h", [1, 3]);

  // then
  expect(board.getShipCoords().length).toEqual(3);
});

test("don't place ships that extend past edges of board", () => {
  // given
  const board = Gameboard();
  const carrier = Ship(5);

  // when
  board.placeShip(carrier, "h", [8, 3]);

  // then
  expect(board.getShipCoords().length).toEqual(0);
});

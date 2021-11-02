"use strict";

import { ship } from "./modules/ship";

// Testing ship factory
const testShip = ship(3);
test.skip("test that ship factory produces ship of correct length", () => {
  expect(testShip.getLength()).toBe(3);
});

test.skip("test that ship records hit", () => {
  expect(testShip.hit(1)).toBe;
});

test.skip("test that ship factory reports whether sunk", () => {});

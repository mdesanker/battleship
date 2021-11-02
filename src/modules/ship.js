"use strict";

// Create ship factory function
const ship = (length) => {
  const shipArray = new Array(length).fill("");

  const getShip = () => shipArray;

  const getLength = () => shipArray.length;

  const hit = (pos) => {
    if (shipArray[pos]) return;
    shipArray[pos] = "x";
  };

  const isSunk = () => {
    return shipArray.every((el) => el === "x");
  };

  return { getShip, getLength, hit, isSunk };
};

export { ship };

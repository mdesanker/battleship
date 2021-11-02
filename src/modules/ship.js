"use strict";

// Create ship factory function
const Ship = (length) => {
  const shipArray = new Array(length).fill("");

  const getShip = () => shipArray;

  const getLength = () => shipArray.length;

  const hit = (pos) => {
    if (shipArray[pos] || pos < 0 || pos >= shipArray.length) return;
    shipArray[pos] = "x";
  };

  const isSunk = () => {
    return shipArray.every((el) => el === "x");
  };

  return { getShip, getLength, hit, isSunk };
};

export { Ship };

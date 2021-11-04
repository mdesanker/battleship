"use strict";

// Create ship factory function
const Ship = (length) => {
  const shipArray = new Array(length).fill("");
  let hits = [];
  let position = [];

  const getShip = () => shipArray;

  const getLength = () => length;

  const setPosition = (coords) => {
    position = coords;
  };

  const getPosition = () => {
    return position;
  };

  const hit = (pos) => {
    hits.push(pos);
  };

  const getHits = () => {
    return hits;
  };

  // const hit = (pos) => {
  //   if (shipArray[pos] || pos < 0 || pos >= shipArray.length) return;
  //   shipArray[pos] = "x";
  // };

  const isSunk = () => {
    return shipArray.every((el) => el === "x");
  };

  return { getShip, getLength, hit, getHits, isSunk, setPosition, getPosition };
};

export { Ship };

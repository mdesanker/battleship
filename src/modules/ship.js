"use strict";

// Create ship factory function
const Ship = (length, name) => {
  let hits = [];
  let position = [];

  const getLength = () => length;
  const getName = () => name;

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

  const isSunk = () => {
    return position.length === hits.length;
  };

  return { getLength, getName, hit, getHits, isSunk, setPosition, getPosition };
};

export { Ship };

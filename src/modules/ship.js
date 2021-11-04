"use strict";

// Create ship factory function
const Ship = (length) => {
  let hits = [];
  let position = [];

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

  const isSunk = () => {
    return position.length === hits.length;
  };

  return { getLength, hit, getHits, isSunk, setPosition, getPosition };
};

export { Ship };

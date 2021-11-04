"use strict";

// Gameboard factory
const Gameboard = () => {
  const ships = [];
  const misses = [];

  const placeShip = (ship, dir, coords) => {
    // Determine coords of new ship with dir and length
    const newShipCoords = [];
    for (let i = 0; i < ship.getLength(); i++) {
      newShipCoords.push(
        dir === "h" ? [coords[0] + i, coords[1]] : [coords[0], coords[1] + i]
      );
    }

    // Check for overlap with edge of board
    for (let coord of newShipCoords) {
      if (coord.some((el) => el < 0 || el > 9)) return;
    }

    // Check for overlap with placed ships
    const currentCoords = JSON.stringify(
      ships.flatMap((ship) => ship.getPosition())
    );
    if (
      newShipCoords.filter((coord) =>
        currentCoords.includes(JSON.stringify(coord))
      ).length > 0
    )
      return;

    // Set position of ship
    ship.setPosition(newShipCoords);
    ships.push(ship);
  };

  const receiveAttack = (coords) => {
    const currentCoords = JSON.stringify(
      ships.flatMap((ship) => ship.getPosition())
    );
    if (currentCoords.includes(JSON.stringify(coords))) {
      ships.forEach((ship) => {
        const shipCoords = JSON.stringify(ship.getPosition());
        if (shipCoords.includes(JSON.stringify(coords))) {
          ship.hit(coords);
          // console.log("hits", ship.getHits());
          // console.log("sunk?", ship.isSunk());
          console.log("all ships sunk?", checkAllShipsSunk());
        }
      });
    } else {
      misses.push(coords);
      console.log("misses", misses);
    }
  };

  const checkAllShipsSunk = () => {
    // Check num sunken ships === num ships
    return (
      ships.filter((ship) => ship.isSunk() === true).length === ships.length
    );
  };

  return {
    placeShip,
    receiveAttack,
    checkAllShipsSunk,
  };
};

export { Gameboard };

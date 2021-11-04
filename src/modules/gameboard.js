"use strict";

import { Ship } from "./ship";

// Gameboard factory
const Gameboard = () => {
  // Battleship played on 10 x 10 grid
  const board = [
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ];

  // // Create ships for each board
  // const carrier = Ship(5);
  // const battleship = Ship(4);
  // const destroyer = Ship(3);
  // const submarine = Ship(3);
  // const patrol = Ship(2);

  // Store ships in array
  const ships = [];
  // const ships = [carrier, battleship, destroyer, submarine, patrol];

  // Store coordinates of misses by opponent
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

  // placeShip(carrier, "v", [3, 3]);
  // placeShip(battleship, "h", [1, 8]);
  // placeShip(destroyer, "v", [8, 5]);
  // placeShip(submarine, "v", [5, 5]);
  // placeShip(patrol, "h", [1, 1]);

  // console.log("carrier", carrier.getPosition());
  // console.log("battleship", battleship.getPosition());
  // console.log("destroyer", destroyer.getPosition());
  // console.log("sub", submarine.getPosition());
  // console.log("patrol", patrol.getPosition());

  const receiveAttack = (coords) => {
    const currentCoords = JSON.stringify(
      ships.flatMap((ship) => ship.getPosition())
    );
    if (currentCoords.includes(JSON.stringify(coords))) {
      ships.forEach((ship) => {
        const shipCoords = JSON.stringify(ship.getPosition());
        if (shipCoords.includes(JSON.stringify(coords))) {
          ship.hit(coords);
          console.log("hits", ship.getHits());
          console.log("sunk?", ship.isSunk());
        }
      });
    } else {
      misses.push(coords);
      console.log("misses", misses);
    }
  };

  // receiveAttack([3, 3]);
  // receiveAttack([1, 2]);
  // receiveAttack([1, 2]);
  // receiveAttack([3, 4]);
  // receiveAttack([1, 1]);
  // receiveAttack([2, 1]);

  return {
    placeShip,
    receiveAttack,
  };
};

export { Gameboard };

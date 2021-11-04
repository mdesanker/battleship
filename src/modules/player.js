"use strict";

import { Gameboard } from "./gameboard";
import { Ship } from "./ship";

const Player = (name) => {
  const getName = () => {
    return name;
  };

  // Create player ships
  const carrier = Ship(5, "carrier");
  const battleship = Ship(4, "battleship");
  const destroyer = Ship(3, "destroyer");
  const submarine = Ship(3, "submarine");
  const patrol = Ship(2, "patrol");

  const ships = [carrier, battleship, destroyer, submarine, patrol];

  const getShips = () => {
    return ships;
  };

  const getShip = (ship) => {
    return ships.find((item) => item.getName() === ship);
  };

  return { getName, getShips, getShip };
};

export { Player };

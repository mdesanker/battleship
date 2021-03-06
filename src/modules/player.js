"use strict";

import { Ship } from "./ship";

const Player = (name) => {
  let userName = name;

  const getName = () => {
    return userName;
  };

  const setName = (newName) => {
    userName = newName;
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

  const resetShips = () => {
    ships.forEach((ship) => ship.reset());
  };

  return { getName, setName, getShips, getShip, resetShips };
};

export { Player };

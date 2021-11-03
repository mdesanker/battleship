"use strict";

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

  const printBoard = () => {
    return board;
  };

  // Store coordinates of ships placed on board
  const shipCoords = [];

  // Store coordinates of attacks by opponent
  const hits = [];
  const misses = [];

  const placeShip = (ship, dir, coords) => {
    // Determine coords of new ship
    const newShipCoords = [];
    for (let i = 0; i < ship.getLength(); i++) {
      newShipCoords.push(
        dir === "h" ? [coords[0] + i, coords[1]] : [coords[0], coords[1] + i]
      );
    }

    // Check for coordinate overlap with edge of board
    for (let coord of newShipCoords) {
      if (coord.some((el) => el < 0 || el > 9)) return;
    }

    // Check for coordinate overlap with existing ships
    const shipCoordStr = JSON.stringify(shipCoords);
    if (
      newShipCoords.filter((coord) =>
        shipCoordStr.includes(JSON.stringify(coord))
      ).length > 0
    )
      return;

    // Add coordinates of new ship to shipCoords
    shipCoords.push(...newShipCoords);

    displayShips();
  };

  const displayShips = () => {
    shipCoords.forEach((coord) => {
      board[coord[1]][coord[0]] = "*";
    });
  };

  const receiveAttack = (coords) => {
    board[coords[1]][coords[0]] = "O";
    const shipCoordStr = JSON.stringify(shipCoords);
    if (shipCoordStr.includes(JSON.stringify(coords))) {
      hits.push(coords);
    } else misses.push(coords);

    console.log("hits", hits);
    console.log("misses", misses);

    // showAttack();
  };

  const showAttack = () => {
    hits.forEach((coord) => {
      board[coord[1]][coord[0]] = "O";
    });
  };

  const getShipCoords = () => {
    return shipCoords;
  };

  return { placeShip, receiveAttack, printBoard, getShipCoords };
};

export { Gameboard };

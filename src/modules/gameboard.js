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
    console.log(board);
  };

  // Store coordinates of ships placed on board
  const shipCoords = [];
  const attacks = [];

  // Place ships on board
  const placeShip = (ship, dir, coords) => {
    for (let i = 0; i < ship.getLength(); i++) {
      // board[coords[1]][coords[0] + i] = "*";
      shipCoords.push(
        dir === "h" ? [coords[1], coords[0] + i] : [coords[1] + i, coords[0]]
      );
    }
    console.log(shipCoords);
  };

  // Display ship positions on board
  const displayShips = () => {
    shipCoords.forEach((coord) => {
      board[coord[1]][coord[0]] = "*";
    });
  };

  // Receive attacks on board
  const receiveAttack = (coords) => {
    board[coords[1]][coords[0]] = "x";
    attacks.push([coords[1], coords[0]]);
  };

  return { placeShip, receiveAttack, printBoard, displayShips };
};

export { Gameboard };

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

  // Store coordinates of attacks by opponent
  const attacks = [];

  // Place ships on board
  const placeShip = (ship, dir, coords) => {
    // Determine coords of new ship
    const newCoords = [];
    for (let i = 0; i < ship.getLength(); i++) {
      newCoords.push(
        dir === "h" ? [coords[0] + i, coords[1]] : [coords[0], coords[1] + i]
      );
    }
    console.log("newCoords", newCoords);
    console.log("shipCoords", shipCoords);

    // Filter list of existing coords down to overlap with new ship and check if any
    const shipStr = JSON.stringify(shipCoords);
    if (
      newCoords.filter((coord) => shipStr.includes(JSON.stringify(coord)))
        .length > 0
    )
      return;

    // Add coordinates to array depending on orientation
    for (let i = 0; i < ship.getLength(); i++) {
      shipCoords.push(
        dir === "h" ? [coords[0] + i, coords[1]] : [coords[0], coords[1] + i]
      );
    }
    displayShips();
  };

  const displayShips = () => {
    shipCoords.forEach((coord) => {
      board[coord[1]][coord[0]] = "*";
    });
  };

  const receiveAttack = (coords) => {
    board[coords[1]][coords[0]] = "x";
    attacks.push(coords);
  };

  return { placeShip, receiveAttack, printBoard };
};

export { Gameboard };

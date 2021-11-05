"use strict";

import { Player } from "../modules/player";

// Elements
const playerBoardDisplay = document.querySelector(".player-board");
const compBoardDisplay = document.querySelector(".comp-board");

// Functions
const displayShips = (player) => {
  player.getShips().forEach((ship) => {
    ship.getPosition().forEach((coord) => {
      const grid = playerBoardDisplay.querySelector(
        `div[data-row="${coord[1]}"][data-col="${coord[0]}"]`
      );
      grid.style.backgroundColor = "gray";
    });
  });
};

const placeCompShips = (computer) => {
  computer.getShips().forEach((ship) => {
    ship.getPosition().forEach((coord) => {
      const grid = compBoardDisplay.querySelector(
        `div[data-row="${coord[1]}"][data-col="${coord[0]}"]`
      );
      grid.style.backgroundColor = "lightblue";
    });
  });
};

const updatePlayerBoard = (board) => {
  const hitCoords = board.getHits();
  const missCoords = board.getMisses();

  hitCoords.forEach((coord) => {
    const grid = playerBoardDisplay.querySelector(
      `div[data-row="${coord[1]}"][data-col="${coord[0]}"]`
    );
    grid.style.backgroundColor = "red";
  });

  missCoords.forEach((coord) => {
    const grid = playerBoardDisplay.querySelector(
      `div[data-row="${coord[1]}"][data-col="${coord[0]}"]`
    );
    grid.style.backgroundColor = "blue";
  });
};

const updateComputerBoard = (board) => {
  const hitCoords = board.getHits();
  const missCoords = board.getMisses();

  hitCoords.forEach((coord) => {
    const grid = compBoardDisplay.querySelector(
      `div[data-row="${coord[1]}"][data-col="${coord[0]}"]`
    );
    grid.style.backgroundColor = "red";
  });

  missCoords.forEach((coord) => {
    const grid = compBoardDisplay.querySelector(
      `div[data-row="${coord[1]}"][data-col="${coord[0]}"]`
    );
    grid.style.backgroundColor = "blue";
  });
};

const checkBoardCleared = (board) => {
  if (board.checkAllShipsSunk()) {
    console.log("");
  }
};

export { displayShips, placeCompShips, updatePlayerBoard, updateComputerBoard };

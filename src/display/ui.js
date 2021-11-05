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

// const playerDisplay = () => {

// }

export { displayShips };

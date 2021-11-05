"use strict";

import "./style.css";
import { Ship } from "./modules/ship";
import { Gameboard } from "./modules/gameboard";
import { Player } from "./modules/player";
import {
  displayPlayerShips,
  displayCompShips,
  updatePlayerBoard,
  updateComputerBoard,
} from "./display/ui";

const DisplayController = (() => {
  // Create player objects
  const player = Player("Human");
  const computer = Player("Computer");

  // Create board objects
  const playerBoard = Gameboard();
  const computerBoard = Gameboard();

  // Place ships randomly on both boards
  playerBoard.placeShipsRandom(player.getShips());
  computerBoard.placeShipsRandom(computer.getShips());

  // Elements
  const playerBoardDisplay = document.querySelector(".player-board");
  const compBoardDisplay = document.querySelector(".comp-board");

  displayPlayerShips(player);
  displayCompShips(computer);

  let gameIsOver = false;

  // Add event listener to computer board
  compBoardDisplay.addEventListener("click", (e) => {
    const attack = [
      Number.parseInt(e.target.dataset.col),
      Number.parseInt(e.target.dataset.row),
    ];

    if (!gameIsOver) {
      computerBoard.receiveAttack(attack);
      updateComputerBoard(computerBoard);
      if (computerBoard.checkAllShipsSunk()) {
        gameIsOver = true;
        // Declare player winner

        alert("Player wins!");
      }
    }

    // Set 1 second timer on computer attack to make it seem more realistic
    if (!gameIsOver) {
      setTimeout(function () {
        playerBoard.computerAttack();
        updatePlayerBoard(playerBoard);
        if (playerBoard.checkAllShipsSunk()) {
          // Declare computer winner
          alert("Computer wins!");
        }
      }, 100);
    }
  });

  const header = document.querySelector("h1");

  header.addEventListener("click", () => {
    player.resetShips();
    computer.resetShips();
    playerBoard.resetBoard();
    computerBoard.resetBoard();
  });
})();

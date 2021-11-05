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
  // const playerName = prompt("Enter your name:");
  // const player = Player(playerName);

  const player = Player("Player 1");
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
  const gameOverModal = document.querySelector(".game-over");
  const restartBtn = document.querySelector(".again-btn");
  const winner = document.querySelector(".winner");

  // Functions
  const toggleGameOverModal = () => {
    gameOverModal.classList.toggle("hide");
  };

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
        winner.textContent = `${player.getName()}`;
        toggleGameOverModal();
      }
    }

    // Set 1 second timer on computer attack to make it seem more realistic
    if (!gameIsOver) {
      setTimeout(function () {
        playerBoard.computerAttack();
        updatePlayerBoard(playerBoard);
        if (playerBoard.checkAllShipsSunk()) {
          // Declare computer winner
          winner.textContent = `${computer.getName()}`;
          toggleGameOverModal();
        }
      }, 100);
    }
  });

  restartBtn.addEventListener("click", () => {
    player.resetShips();
    computer.resetShips();
    playerBoard.resetPlayerBoard();
    computerBoard.resetComputerBoard();
    playerBoard.placeShipsRandom(player.getShips());
    computerBoard.placeShipsRandom(computer.getShips());
    displayPlayerShips(player);
    displayCompShips(computer);

    toggleGameOverModal();

    gameIsOver = false;
  });
})();

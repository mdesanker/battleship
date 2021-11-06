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
  // playerBoard.placeShipsRandom(player.getShips());
  computerBoard.placeShipsRandom(computer.getShips());

  // Place player ships manually
  const placementBoard = document.querySelector(".placement-board");
  const shipDetails = document.querySelector(".ship-details");
  const dirToggle = document.querySelector("#direction");
  console.log(shipDetails.textContent);

  const shipsRemaining = player.getShips();

  let i = 0;
  shipDetails.textContent = `Click to place ${player
    .getShips()
    [i].getName()} [${player.getShips()[i].getLength()}]`;

  placementBoard.addEventListener("click", (e) => {
    const clicked = [
      Number.parseInt(e.target.dataset.col),
      Number.parseInt(e.target.dataset.row),
    ];
    console.log(dirToggle.checked);
    console.log(dirToggle.value);
    if (i < player.getShips().length) {
      // Place next ship in list on player board
      playerBoard.placeShip(
        player.getShips()[i],
        dirToggle.checked ? "v" : "h",
        clicked
      );
      displayPlayerShips(player);
      // Verify ship successfully placed on board
      if (playerBoard.shipsOnBoard() === i + 1 && i < 4) {
        i++;
        shipDetails.textContent = `Click to place ${player
          .getShips()
          [i].getName()} [${player.getShips()[i].getLength()}]`;
      } else if (i === 4) {
        shipDetails.textContent = "All ships placed";
      }
    }
  });

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

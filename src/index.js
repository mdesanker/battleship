"use strict";

import "./style.css";
import { Gameboard } from "./modules/gameboard";
import { Player } from "./modules/player";
import {
  displayPlayerShips,
  displayCompShips,
  updatePlayerBoard,
  updateComputerBoard,
} from "./display/ui";

const DisplayController = (() => {
  // Title Page
  // Elements
  const titlePage = document.querySelector(".title-page");
  const nameInput = document.querySelector("#name");
  const startBtn = document.querySelector(".start-game");

  startBtn.addEventListener("click", () => {
    if (!nameInput.value) return;
    player.setName(nameInput.value);
    titlePage.classList.add("hide");
  });

  // Create player objects
  const player = Player("Player 1");
  const computer = Player("Computer");

  // Create board objects
  const playerBoard = Gameboard();
  const computerBoard = Gameboard();

  // Place ships randomly on both boards
  computerBoard.placeShipsRandom(computer.getShips());

  // Place player ships manually
  // Elements
  const placementModal = document.querySelector(".ship-placer");
  const placementBoard = document.querySelector(".placement-board");
  const shipDetails = document.querySelector(".ship-details");
  const dirToggle = document.querySelector("#direction");
  const randomBtn = document.querySelector(".random");
  const finishBtn = document.querySelector(".finished");

  // Functions
  const togglePlacementModal = () => {
    placementModal.classList.toggle("hide");
  };

  // Ship placement counter
  let i = 0;
  shipDetails.textContent = `Click to place ${player
    .getShips()
    [i].getName()} [${player.getShips()[i].getLength()}]`;

  // Event Listeners
  finishBtn.addEventListener("click", () => {
    if (playerBoard.shipsOnBoard() === 5) {
      togglePlacementModal();
      i = 0;
      shipDetails.textContent = `Click to place ${player
        .getShips()
        [i].getName()} [${player.getShips()[i].getLength()}]`;
    }
  });

  randomBtn.addEventListener("click", () => {
    // Clear current ships
    player.resetShips();
    playerBoard.resetPlayerBoard();
    displayPlayerShips(player);
    i = 0;
    shipDetails.textContent = `Click to place ${player
      .getShips()
      [i].getName()} [${player.getShips()[i].getLength()}]`;

    // Place player ships randomly
    playerBoard.placeShipsRandom(player.getShips());
    displayPlayerShips(player);
    shipDetails.textContent = "Ships placed randomly";
  });

  placementBoard.addEventListener("click", (e) => {
    const clicked = [
      Number.parseInt(e.target.dataset.col),
      Number.parseInt(e.target.dataset.row),
    ];
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

  // Play the game
  // Elements
  const playerBoardDisplay = document.querySelector(".player-board");
  const compBoardDisplay = document.querySelector(".comp-board");
  const gameOverModal = document.querySelector(".game-over");
  const restartBtn = document.querySelector(".again");
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

    if (!gameIsOver) {
      setTimeout(function () {
        playerBoard.computerAttack();
        updatePlayerBoard(playerBoard);
        if (playerBoard.checkAllShipsSunk()) {
          // Declare computer winner
          winner.textContent = `${computer.getName()}`;
          toggleGameOverModal();
        }
      }, 500);
    }
  });

  restartBtn.addEventListener("click", () => {
    player.resetShips();
    computer.resetShips();
    playerBoard.resetPlayerBoard();
    computerBoard.resetComputerBoard();
    computerBoard.placeShipsRandom(computer.getShips());
    displayPlayerShips(player);
    displayCompShips(computer);

    toggleGameOverModal();
    togglePlacementModal();

    gameIsOver = false;
  });
})();

"use strict";

import "./style.css";
import { Ship } from "./modules/ship";
import { Gameboard } from "./modules/gameboard";
import { Player } from "./modules/player";

const playRound = (playerBoard, computerBoard) => {
  let round = 0;

  // Alternate player with each round
  // let currentPlayer = round % 2 === 0 ? player : computer;

  // Player attack computer board
  const coord = window.prompt("Choose coordinates to attack");
  computerBoard.receiveAttack(coord);

  // Check computer has ships remaining
  if (computerBoard.checkAllShipsSunk()) {
    console.log("Computer has no ships remaining");
  }

  // Computer attack player board
  playerBoard.randomAttack();

  // Check player has ships remaining
  if (playerBoard.checkAllShipsSunk()) {
    console.log("Computer has no ships remaining");
  }

  // Increment round counter
  round++;
};

// Battleship game loop
let roundTest = 0;
let isGameOver = false;
while (!isGameOver) {
  // while (roundTest <= 10) {
  // Create player objects
  const player = Player("Human");
  const computer = Player("Computer");

  // console.log(currentPlayer.getName());

  // Create board objects
  const playerBoard = Gameboard();
  const computerBoard = Gameboard();

  playerBoard.placeShipsRandom(player.getShips());
  computerBoard.placeShipsRandom(computer.getShips());

  // playRound(playerBoard, computerBoard);

  // console.log(player.getShip("carrier").getPosition());

  player.getShips().forEach((ship) => {
    // console.log(ship.getPosition());
  });

  // playerBoard.randomAttack();

  isGameOver = true;
  roundTest++;
}

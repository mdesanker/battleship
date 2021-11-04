"use strict";

import "./style.css";
import { Ship } from "./modules/ship";
import { Gameboard } from "./modules/gameboard";
import { Player } from "./modules/player";

// Battleship game loop
let isGameOver = false;
while (!isGameOver) {
  // Create player objects
  const player = Player("Human");
  const computer = Player("Computer");
  let round = 0;

  // Alternate player with each round
  let currentPlayer = round % 2 === 0 ? player : computer;
  // console.log(currentPlayer.getName());

  // Create board objects
  const playerBoard = Gameboard();
  const computerBoard = Gameboard();

  playerBoard.placeShipsRandom(player.getShips());

  // console.log(player.getShip("carrier").getPosition());

  player.getShips().forEach((ship) => {
    // console.log(ship.getPosition());
  });

  playerBoard.randomAttack();

  isGameOver = true;
}

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

  console.log(player.getShip("carrier").getPosition());

  // player.getShips().forEach((ship) => {
  //   console.log(ship.getPosition());
  // });

  // // Computer place ships on boards
  // const cCarrier = Ship(5);
  // const cBattleship = Ship(4);
  // const cDestroyer = Ship(3);
  // const cSubmarine = Ship(3);
  // const cPatrol = Ship(2);

  // const cShips = [cCarrier, cBattleship, cDestroyer, cSubmarine, cPatrol];

  // console.log("Computer ships");
  // computerBoard.placeShipsRandom(cShips);

  // // Player place ships on boards
  // const pCarrier = Ship(5);
  // const pBattleship = Ship(4);
  // const pDestroyer = Ship(3);
  // const pSubmarine = Ship(3);
  // const pPatrol = Ship(2);

  // const pShips = [pCarrier, pBattleship, pDestroyer, pSubmarine, pPatrol];

  // console.log("Player ships");
  // playerBoard.placeShipsRandom(pShips);

  isGameOver = true;
}

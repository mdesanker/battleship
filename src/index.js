"use strict";

import "./style.css";
import { Ship } from "./modules/ship";
import { Gameboard } from "./modules/gameboard";

const board = Gameboard();
// board.printShips();
// console.log(board.printBoard());

// const carrier = Ship(5);

// board.placeShip(carrier, "v", [3, 3]);

// console.log(carrier.getPosition().length);

// Create ships for each board
const carrier = Ship(5);
const battleship = Ship(4);
// const destroyer = Ship(3);
const submarine = Ship(3);
const patrol = Ship(2);

// board.placeShip(carrier, "v", [3, 3]);
// board.placeShip(battleship, "h", [1, 8]);
// placeShip(destroyer, "v", [8, 5]);
board.placeShip(submarine, "v", [5, 5]);
board.placeShip(patrol, "h", [1, 1]);

// console.log("carrier", carrier.getPosition());
// console.log("battleship", battleship.getPosition());
// console.log("destroyer", destroyer.getPosition());
console.log("sub", submarine.getPosition());
console.log("patrol", patrol.getPosition());

board.receiveAttack([8, 8]);
board.receiveAttack([1, 1]);
board.receiveAttack([2, 1]);
board.receiveAttack([5, 5]);
board.receiveAttack([5, 6]);
board.receiveAttack([5, 7]);

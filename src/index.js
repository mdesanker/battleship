"use strict";

import "./style.css";
import { Ship } from "./modules/ship";
import { Gameboard } from "./modules/gameboard";

const board = Gameboard();

// console.log(newBoard);
console.log(board.printBoard());

// newBoard.receiveAttack([5, 2]);
// newBoard.receiveAttack([7, 6]);

const carrier = Ship(5);
const battleship = Ship(4);
const cruiser = Ship(3);
const submarine = Ship(3);
const destroyer = Ship(2);

board.placeShip(battleship, "h", [3, 4]);
board.placeShip(cruiser, "v", [0, 2]);

board.displayShips();

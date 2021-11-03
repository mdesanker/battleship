"use strict";

import "./style.css";
import { Ship } from "./modules/ship";
import { Gameboard } from "./modules/gameboard";

const board = Gameboard();

console.log(board.printBoard());

const carrier = Ship(5);
const battleship = Ship(4);
const destroyer = Ship(3);
const submarine = Ship(3);
const patrol = Ship(2);

board.placeShip(battleship, "h", [3, 4]);
board.placeShip(carrier, "v", [5, 2]); // Overlaps with battleship
board.placeShip(carrier, "v", [1, 2]);
board.placeShip(destroyer, "v", [8, 7]);
board.placeShip(destroyer, "v", [5, 8]); // Extends outside edge of board

board.receiveAttack([0, 0]);
board.receiveAttack([3, 4]);
board.receiveAttack([6, 4]);

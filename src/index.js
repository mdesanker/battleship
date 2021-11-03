"use strict";

import "./style.css";
import { Ship } from "./modules/ship";
import { Gameboard } from "./modules/gameboard";

const board = Gameboard();

board.printBoard();

const carrier = Ship(5);
const battleship = Ship(4);

board.placeShip(battleship, "h", [3, 4]);
board.placeShip(carrier, "v", [5, 2]);

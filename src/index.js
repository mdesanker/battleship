"use strict";

import "./style.css";
import { ship } from "./modules/ship";

const destroyer = ship(5);

console.log(typeof destroyer);

console.log(destroyer.getShip());

destroyer.hit(3);
console.log(destroyer.getShip());
destroyer.hit(1);
console.log(destroyer.getShip());
console.log(destroyer.isSunk());
destroyer.hit(0);
destroyer.hit(2);
destroyer.hit(4);
console.log(destroyer.getShip());
console.log(destroyer.isSunk());

console.log(destroyer.length);

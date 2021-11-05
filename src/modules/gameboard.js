"use strict";

// Gameboard factory
const Gameboard = () => {
  const ships = [];
  const misses = [];
  const hits = [];
  const attacks = [];

  const getRandomCoord = () => {
    return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
  };

  const getRandomDir = () => {
    return Math.floor(Math.random() * 2) === 1 ? "h" : "v";
  };

  const placeShip = (ship, dir, coords) => {
    // Determine coords of new ship with dir and length
    const newShipCoords = [];
    for (let i = 0; i < ship.getLength(); i++) {
      newShipCoords.push(
        dir === "h" ? [coords[0] + i, coords[1]] : [coords[0], coords[1] + i]
      );
    }

    // Check for overlap with edge of board
    for (let coord of newShipCoords) {
      if (coord.some((el) => el < 0 || el > 9)) return;
    }

    // Check for overlap with placed ships
    const currentCoords = JSON.stringify(
      ships.flatMap((ship) => ship.getPosition())
    );
    if (
      newShipCoords.filter((coord) =>
        currentCoords.includes(JSON.stringify(coord))
      ).length > 0
    )
      return;

    // Set position of ship
    ship.setPosition(newShipCoords);
    ships.push(ship);
  };

  const placeShipsRandom = (shipArr) => {
    shipArr.forEach((ship) => {
      let shipPlaced = false;
      while (!shipPlaced) {
        const dir = getRandomDir();
        const coords = getRandomCoord();
        placeShip(ship, dir, coords);
        if (ships.includes(ship)) {
          shipPlaced = true;
        }
      }
      // console.log(ship.getPosition());
      console.log(JSON.stringify(ship.getPosition()));
    });
  };

  const receiveAttack = (coords) => {
    if (JSON.stringify(attacks).includes(JSON.stringify(coords))) return;
    const currentCoords = JSON.stringify(
      ships.flatMap((ship) => ship.getPosition())
    );
    if (currentCoords.includes(JSON.stringify(coords))) {
      ships.forEach((ship) => {
        const shipCoords = JSON.stringify(ship.getPosition());
        if (shipCoords.includes(JSON.stringify(coords))) {
          ship.hit(coords);
          hits.push(coords);
          console.log("hits", hits);
          // attacks.push(coords);
          // console.log("hits", ship.getHits());
          // console.log("sunk?", ship.isSunk());

          // console.log("all ships sunk?", checkAllShipsSunk());
        }
      });
    } else {
      misses.push(coords);
      // attacks.push(coords);
      console.log("misses", misses);
    }
  };

  const randomAttack = () => {
    let coordIsNew = false;
    while (!coordIsNew) {
      const randCoord = [
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
      ];
      if (!JSON.stringify(attacks).includes(JSON.stringify(randCoord))) {
        console.log(randCoord);
        receiveAttack(randCoord);
        console.log("attacks", attacks);
        coordIsNew = true;
      }
    }
  };

  const checkAllShipsSunk = () => {
    // Check num sunken ships === num ships
    return (
      ships.filter((ship) => ship.isSunk() === true).length === ships.length
    );
  };

  const getHits = () => {
    return hits;
  };

  const getMisses = () => {
    return misses;
  };

  return {
    placeShip,
    receiveAttack,
    randomAttack,
    checkAllShipsSunk,
    placeShipsRandom,
    getHits,
    getMisses,
  };
};

export { Gameboard };

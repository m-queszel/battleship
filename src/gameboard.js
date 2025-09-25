export class Gameboard {
  constructor() {
    this.gameboard = initializeGameboard();
  };

}

function initializeGameboard() {
  let board = []
  for (let i = 0; i < 10; i++) {
    board[i] = [];
    for (let j = 0; j < 10; j++) {
      board[i][j] = "W";
    }
  }
  return board;
}

export function placeShipAt(gameboard, x, y, ship, direction) {
  if (gameboard[y][x] === "W") {
    if (checkIfCanPlace(gameboard, x, y, ship, direction)) {
      if (direction === "right") {
        for (let i = 0; i < ship.length; i++) {
          gameboard[y][x + i] = "S";
        }
      }
      if (direction === "up") {
        for (let i = 0; i < ship.length; i++) {
          gameboard[y + i][x] = "S";
        }
      }
    }
  }
}

function checkIfCanPlace(gameboard, x, y, ship, direction) {
  let canPlace = false;
  const length = ship.length;
  if (direction === "right") {
    for (let i = 0; i < length; i++) {
      if (!gameboard[y][x + i] === "W") {
        return canPlace;
      }
    }
  }
  if (direction === "up") {
    for (let i = 0; i < length; i++) {
      if (!gameboard[y + i][x] === "W") {
        return canPlace;
      }
    }
  }

  canPlace = true;
  return canPlace;
}

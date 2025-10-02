export class Gameboard {
  constructor() {
    this.gameboard = initializeGameboard();
  };

  placeShipAt(x, y, ship, direction) {
    if (this.gameboard[y][x] === "W") {
      if (checkIfCanPlace(this.gameboard, x, y, ship, direction)) {
        if (direction === "right") {
          for (let i = 0; i < ship.length; i++) {
            this.gameboard[y][x + i] = "S";
          }
        }
        if (direction === "up") {
          for (let i = 0; i < ship.length; i++) {
            this.gameboard[y + i][x] = "S";
          }
        }
      }
    }
  }

  receiveAttack(x, y) {
    if (this.gameboard[y][x] === "W") {
      return "W";
    }
    else {
      this.gameboard[y][x] = "H";
      return "H";
    }
  }

  hasLost() {
    return checkLoss(this.gameboard);
  }


}

function checkLoss(gameboard) {
  let hasLost = true;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (gameboard[i][j] === "S") {
        hasLost = false;
      }
    }
  }
  return hasLost;
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

export class Ship {
  constructor(lengthIn, numHitsIn) {
    this.length = lengthIn;
    this.numHits = numHitsIn;
    this.health = updateHealth(this);
  }

  hit() {
    this.numHits++;
    this.health = updateHealth(this);
  }

  isSunk() {
    if (this.health === 0) {
      return true;
    }
    else {
      return false;
    }
  }

}

function updateHealth(ship) {
  return ship.length - ship.numHits;
}

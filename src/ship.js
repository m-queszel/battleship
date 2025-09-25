export class Ship {
  constructor(lengthIn, numHitsIn) {
    this.length = lengthIn;
    this.numHits = numHitsIn;
    this.health = this.length - this.numHits;
  }
}


import { Gameboard } from "./gameboard";

export default class Player {
  constructor(playerType) {
    this.type = playerType;
    this.gameboard = new Gameboard();
  }

}

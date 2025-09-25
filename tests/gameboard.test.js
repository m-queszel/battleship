import { Gameboard, placeShipAt } from "../src/gameboard.js";
import { Ship } from "../src/ship.js";
describe("gameboard", () => {

  let gb1;
  let ship;

  beforeEach(() => {
    gb1 = new Gameboard();
    ship = new Ship(2, 0);
  })

  it("should place a 'destroyer at [0,0], [1,0]", () => {
    placeShipAt(gb1.gameboard, 0, 0, ship, "right");
    expect(gb1.gameboard[0][0]).toBe("S");
    expect(gb1.gameboard[0][1]).toBe("S");
  });
});

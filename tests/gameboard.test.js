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
    gb1.placeShipAt(0, 0, ship, "right");
    expect(gb1.gameboard[0][0]).toBe("S");
    expect(gb1.gameboard[0][1]).toBe("S");
  });

  it("should see if a destroyer placed at [0,0], [1,0] has empty adjacent tiles", () => {
    gb1.placeShipAt(0, 0, ship, "right");
    expect(gb1.gameboard[0][2]).toBe("W");
    expect(gb1.gameboard[1][0]).toBe("W");
    expect(gb1.gameboard[1][1]).toBe("W");
  })

  describe("attacking the gameboard", () => {

    beforeEach(() => {
      gb1.placeShipAt(4, 4, ship, "right");
      gb1.receiveAttack(4, 4);
    })

    it("should remain 'W' when a received attack misses", () => {
      expect(gb1.gameboard[6][5]).toBe("W");
    })

    it("should update the position on the board to 'H' if it's a hit", () => {
      expect(gb1.gameboard[4][4]).toBe("H");
    })

    it("should be 'W' next to the adjacent hit area", () => {
      expect(gb1.gameboard[5][4]).toBe("W");
    })

  })

  describe("checking the game status", () => {

    beforeEach(() => {
      gb1.placeShipAt(4, 4, ship, "right");
      gb1.receiveAttack(4, 4);
    })

    it("should be false if the player has not lost", () => {
      expect(gb1.hasLost()).toBe(false);
    })

    it("should be true if the player has lost (no ships left on the board)", () => {
      gb1.receiveAttack(5, 4);
      expect(gb1.hasLost()).toBe(true);
    })
  })

});

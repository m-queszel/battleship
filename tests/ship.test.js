import { Ship } from "../src/ship";

describe("ship", () => {

  let ship;

  beforeEach(() => {
    ship = new Ship(3, 1);
  });

  it("should return the ships health", () => {
    expect(ship.health).toBe(2);
  });

  it("should decrease the ships health when hit", () => {
    ship.hit();
    expect(ship.health).toBe(1);
  })

  it("should not be sunk", () => {
    expect(ship.isSunk()).toBe(false);
  })

  it("should be sunk", () => {
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  })

});

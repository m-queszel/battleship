import { Ship } from "../src/ship";

describe("ship", () => {

  let ship;

  beforeEach(() => {
    ship = new Ship(3, 1);
  });

  it("should return the ships health", () => {
    expect(ship.health).toBe(2);
  });

});

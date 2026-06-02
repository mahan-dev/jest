import { calcFunction } from "../code";

describe("gte - greater than or equal to ", () => {
  it("should return true if  a is greater than b", () => {
    const res = calcFunction(4, 2);
    expect(res).toBe(true);
  });
  it("should return true if a is less than b", () => {
    const res = calcFunction(2, 4);
    expect(res).toBe(false);
  });
  it("should return true if a is equal to b", () => {
    const res = calcFunction(4, 4);
    expect(res).toBe(true);
  });
});

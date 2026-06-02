import { calcFunction } from "../code";

const testFunction = () => {};

describe("sample Tets", () => {
  it("test sample - 1", () => {
    const result = calcFunction(5, 3);
    expect(result).toBe(true);
  });

  it("test sample - 2", () => {
    const result = calcFunction(3, 4);
    expect(result).toBe(false);
  });
  it("test sample - 2", () => {
    const result = calcFunction(3, 3);
    expect(result).toBe(true);
  });
});
module.exports = testFunction;

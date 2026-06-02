import { calcFunction, dataList } from "../code";

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

describe("check arrayItem", () => {
  it("should return true if it founded", () => {
    const data = dataList;

    const names = data.map((item) => item.split(" ")[0]);
    console.log("🏝️ ~ code.test.ts:22 -> names: ", names);

    expect(names).toContain("apple");
  });
});

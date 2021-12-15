import fizzbuzz from "./fizzbuzz";

describe("fizzbuzz", () => {
  it("should exist and takes in a number and returns the number", () => {
    const actual = fizzbuzz(1);
    expect(actual).toBe(1);
  });

  it("given a number it should return fizz if the number is divisible 3", () => {
    const actual = fizzbuzz(3);
    expect(actual).toBe("fizz");
  });

  it("given a number it should return buzz if the number is divisible 5", () => {
    const actual = fizzbuzz(5);
    expect(actual).toBe("buzz");
  });

  it("given a number it should return fizzbuzz if the number is divisible 3 and 5", () => {
    const actual = fizzbuzz(15);
    expect(actual).toBe("fizzbuzz");
  });
});

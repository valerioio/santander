import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import fizzbuzz from "./helpers/fizzbuzz";

describe("App", () => {
  it("should render 0 at the beginning", () => {
    render(<App />);
    expect(screen.getByTestId("fizzbuzz").textContent).toBe("0");
  });

  it("should render 1 after one click on the increment button", () => {
    render(<App />);
    const button = screen.getByTestId("increment");
    fireEvent.click(button);
    const actual = screen.getByTestId("fizzbuzz").textContent;
    expect(actual).toBe("1");
  });

  it("should render the correct value for each number between 0 and 100", () => {
    render(<App />);
    const button = screen.getByTestId("increment");
    const header = screen.getByTestId("fizzbuzz");
    for (let i = 1; i <= 100; i++) {
      fireEvent.click(button);
      const expected = fizzbuzz(i).toString();
      expect(header.textContent).toBe(expected);
    }
  });
});

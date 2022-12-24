import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("When the Game Starts, then the initial score should be Love-All", () => {
  render(<App />);
  expect(screen.getByTestId("game_score").textContent).toEqual("Love-All");
});

test("When the running point of player one is 1 then the running score should be Fifteen-Love", () => {
  render(<App />);
  fireEvent.click(screen.getByTestId("Player One"));

  expect(screen.getByTestId("game_score").textContent).toEqual("Fifteen-Love");
});

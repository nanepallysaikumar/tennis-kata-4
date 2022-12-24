import { render, screen } from "@testing-library/react";
import App from "../App";

test("When the Game Starts, then the initial score should be Love-All", () => {
  render(<App />);
  expect(screen.getByTestId("game_score").textContent).toEqual("Love-All");
});

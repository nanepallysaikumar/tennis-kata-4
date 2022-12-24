import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import { testConstants } from "./constants/testConstants";

const { GAME_SCORE, LOVE_ALL, FIFTEEN_LOVE, PLAYER_ONE } = testConstants;

beforeEach(() => {
  render(<App />);
});

const gameScoreShouldBe = (expected) => {
  expect(screen.getByTestId(GAME_SCORE).textContent).toEqual(expected);
};

test("When the Game Starts, then the initial score should be Love-All", () => {
  gameScoreShouldBe(LOVE_ALL);
});

test("When the running point of player one is 1 then the running score should be Fifteen-Love", () => {
  fireEvent.click(screen.getByTestId(PLAYER_ONE));

  gameScoreShouldBe(FIFTEEN_LOVE);
});

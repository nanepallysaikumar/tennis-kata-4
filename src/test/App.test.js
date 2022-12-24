import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import { testConstants } from "./constants/testConstants";

const {
  GAME_SCORE,
  LOVE_ALL,
  FIFTEEN_LOVE,
  PLAYER_ONE,
  THIRTY_LOVE,
  FORTY_LOVE,
  ONE_TIME,
  TWO_TIMES,
  THREE_TIMES,
} = testConstants;

beforeEach(() => {
  render(<App />);
});

const gameScoreShouldBe = (expected) => {
  expect(screen.getByTestId(GAME_SCORE).textContent).toEqual(expected);
};

const playerOneScores = (times) => {
  for (let count = 0; count < times; count++) {
    fireEvent.click(screen.getByTestId(PLAYER_ONE));
  }
};

test("When the Game Starts, then the initial score should be Love-All", () => {
  gameScoreShouldBe(LOVE_ALL);
});

test("When the running point of player one is 1 then the running score should be Fifteen-Love", () => {
  playerOneScores(ONE_TIME);

  gameScoreShouldBe(FIFTEEN_LOVE);
});

test("When the running point of player one is 2 then the running score should be Thirty-Love", () => {
  playerOneScores(TWO_TIMES);

  gameScoreShouldBe(THIRTY_LOVE);
});

test("When the running point of player one is 3 then the running score should be Forty-Love", () => {
  playerOneScores(THREE_TIMES);

  gameScoreShouldBe(FORTY_LOVE);
});

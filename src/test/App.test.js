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
  PLAYER_TWO,
  LOVE_FIFTEEN,
  LOVE_THIRTY,
  LOVE_FORTY,
  FIFTEEN_THIRTY,
} = testConstants;

beforeEach(() => {
  render(<App />);
});

const gameScoreShouldBe = (expected) => {
  expect(screen.getByTestId(GAME_SCORE).textContent).toEqual(expected);
};

const playerOneScores = (times) => {
  playerScores(times, PLAYER_ONE);
};

const playerTwoScores = (times) => {
  playerScores(times, PLAYER_TWO);
};

const playerScores = (times, playerName) => {
  for (let count = 0; count < times; count++) {
    fireEvent.click(screen.getByTestId(playerName));
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

test("When the running point of player one is 0 and the running point of player two is 1 then the running score should be Love-Fifteen", () => {
  playerTwoScores(ONE_TIME);

  gameScoreShouldBe(LOVE_FIFTEEN);
});

test("When the running point of player one is 0 and the running point of player two is 2 then the running score should be Love-Thirty", () => {
  playerTwoScores(TWO_TIMES);

  gameScoreShouldBe(LOVE_THIRTY);
});

test("When the running point of player one is 0 and the running point of player two is 3 then the running score should be Love-Forty", () => {
  playerTwoScores(THREE_TIMES);

  gameScoreShouldBe(LOVE_FORTY);
});

test("When the running point of player one is 1 and the running point of player two is 2 then the running score should be Fifteen-Thirty", () => {
  playerOneScores(ONE_TIME);
  playerTwoScores(TWO_TIMES);

  gameScoreShouldBe(FIFTEEN_THIRTY);
});

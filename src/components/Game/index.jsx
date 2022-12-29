import React, { useEffect, useState } from "react";
import {
  applicationConstants,
  score,
} from "../../constants/applicationConstants";
import { bothScoredPointOneOrTwo } from "./rules/bothScoredSame";
import { differentScoresBetweenOneAndThree } from "./rules/differentScore";
import { deuce } from "./rules/deuce";
import { playerWins } from "./rules/win";
import { advantange } from "./rules/advantage";
import "./index.css";

const rules = [
  deuce,
  bothScoredPointOneOrTwo,
  differentScoresBetweenOneAndThree,
  playerWins,
  advantange,
];

const { GAME_SCORE, PLAYER_ONE, PLAYER_TWO, TITLE, POINT_ONE } =
  applicationConstants;

const { LOVE_ALL } = score;

const Game = () => {
  const [gameScore, setGameScore] = useState(LOVE_ALL);
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const incrementScore = (player) => {
    player === PLAYER_ONE
      ? setPlayerOneScore(playerOneScore + POINT_ONE)
      : setPlayerTwoScore(playerTwoScore + POINT_ONE);
  };

  const updateGameScore = () => {
    setGameScore(calculateGameScore());
  };

  const calculateGameScore = () => {
    for (const rule of rules) {
      if (rule.isCriteriaMatched(playerOneScore, playerTwoScore)) {
        return rule.getScore(playerOneScore, playerTwoScore);
      }
    }
  };

  const isPlayerStartedScoring = () => {
    return playerOneScore > 0 || playerTwoScore > 0;
  };

  useEffect(() => {
    if (isPlayerStartedScoring()) {
      updateGameScore();
    }
  }, [playerOneScore, playerTwoScore]);

  useEffect(() => {
    if (gameScore.indexOf("win") > 0) {
      setGameOver(true);
    }
  }, [gameScore]);

  return (
    <React.Fragment>
      <h1>{TITLE}</h1>
      <p data-testid={GAME_SCORE}>{gameScore}</p>
      <button
        disabled={gameOver}
        data-testid={PLAYER_ONE}
        onClick={() => incrementScore(PLAYER_ONE)}
      >
        {PLAYER_ONE}
      </button>
      <button
        disabled={gameOver}
        data-testid={PLAYER_TWO}
        onClick={() => incrementScore(PLAYER_TWO)}
      >
        {PLAYER_TWO}
      </button>
    </React.Fragment>
  );
};

export { Game };

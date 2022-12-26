import React, { useEffect, useState } from "react";
import {
  applicationConstants,
  score,
  scoreLookUp,
} from "../../constants/applicationConstants";
import "./index.css";

const {
  GAME_SCORE,
  PLAYER_ONE,
  PLAYER_TWO,
  TITLE,
  POINT_ONE,
  POINT_TWO,
  POINT_THREE,
  ZERO_POINT,
} = applicationConstants;
const { LOVE_ALL, FIFTEEN_THIRTY } = score;

const Game = () => {
  const [gameScore, setGameScore] = useState(LOVE_ALL);
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);

  const incrementScore = (player) => {
    player === PLAYER_ONE
      ? setPlayerOneScore(playerOneScore + POINT_ONE)
      : setPlayerTwoScore(playerTwoScore + POINT_ONE);
  };

  const isPlayerOneScoresNotMoreThanThree = () => {
    return playerOneScore <= POINT_THREE;
  };

  const isPlayerTwoScoresNotMoreThanThree = () => {
    return playerTwoScore <= POINT_THREE;
  };

  const updateGameScore = () => {
    setGameScore(calculateGameScore());
  };

  const calculateGameScore = () => {
    if (isPlayerOneScoresNotMoreThanThree() && playerTwoScore === ZERO_POINT) {
      return `${scoreLookUp[playerOneScore]}-Love`;
    }
    if (isPlayerTwoScoresNotMoreThanThree() && playerOneScore === ZERO_POINT) {
      return `Love-${scoreLookUp[playerTwoScore]}`;
    }
    if (playerOneScore === POINT_ONE && playerTwoScore === POINT_TWO) {
      return FIFTEEN_THIRTY;
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

  return (
    <React.Fragment>
      <h1>{TITLE}</h1>
      <p data-testid={GAME_SCORE}>{gameScore}</p>
      <button
        data-testid={PLAYER_ONE}
        onClick={() => incrementScore(PLAYER_ONE)}
      >
        {PLAYER_ONE}
      </button>
      <button
        data-testid={PLAYER_TWO}
        onClick={() => incrementScore(PLAYER_TWO)}
      >
        {PLAYER_TWO}
      </button>
    </React.Fragment>
  );
};

export { Game };

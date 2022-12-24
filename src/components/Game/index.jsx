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
const { LOVE_ALL, FIFTEEN_LOVE, THIRTY_LOVE, FORTY_LOVE, LOVE_FIFTEEN } = score;

const Game = () => {
  const [gameScore, setGameScore] = useState(LOVE_ALL);
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);

  const incrementScore = (player) => {
    player === PLAYER_ONE
      ? setPlayerOneScore(playerOneScore + POINT_ONE)
      : setPlayerTwoScore(playerTwoScore + POINT_ONE);
  };

  const isPlayerOneScoreBetweenOneAndThree = () => {
    return playerOneScore >= POINT_ONE && playerOneScore <= POINT_THREE;
  };

  const calculateGameScore = () => {
    if (isPlayerOneScoreBetweenOneAndThree() && playerTwoScore === ZERO_POINT) {
      const score = `${scoreLookUp[playerOneScore]}-Love`;
      setGameScore(score);
    } else if (playerOneScore === ZERO_POINT && playerTwoScore === POINT_ONE) {
      setGameScore(LOVE_FIFTEEN);
    }
  };

  useEffect(() => {
    calculateGameScore();
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

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
} = applicationConstants;
const { LOVE_ALL, FIFTEEN_ALL, THIRTY_ALL } = score;

const Game = () => {
  const [gameScore, setGameScore] = useState(LOVE_ALL);
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);

  const incrementScore = (player) => {
    player === PLAYER_ONE
      ? setPlayerOneScore(playerOneScore + POINT_ONE)
      : setPlayerTwoScore(playerTwoScore + POINT_ONE);
  };

  const isPlayersScoresNotMoreThanThreePoints = () => {
    return playerOneScore <= POINT_THREE && playerTwoScore <= POINT_THREE;
  };

  const hasBothPlayerScoresOnePoint = () => {
    return playerOneScore === POINT_ONE && playerTwoScore === POINT_ONE;
  };

  const hasBothPlayerScoresTwoPoints = () => {
    return playerOneScore === POINT_TWO && playerTwoScore === POINT_TWO;
  };

  const updateGameScore = () => {
    setGameScore(calculateGameScore());
  };

  const calculateGameScore = () => {
    if (hasBothPlayerScoresOnePoint()) {
      return FIFTEEN_ALL;
    }

    if (hasBothPlayerScoresTwoPoints()) {
      return THIRTY_ALL;
    }

    if (isPlayersScoresNotMoreThanThreePoints()) {
      return `${scoreLookUp[playerOneScore]}-${scoreLookUp[playerTwoScore]}`;
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

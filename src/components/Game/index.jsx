import React, { useEffect, useState } from "react";
import {
  applicationConstants,
  score,
} from "../../constants/applicationConstants";
import "./index.css";

const { GAME_SCORE, PLAYER_ONE, PLAYER_TWO, TITLE, POINT_ONE, POINT_TWO } =
  applicationConstants;
const { LOVE_ALL, FIFTEEN_LOVE, THIRTY_LOVE } = score;

const Game = () => {
  const [gameScore, setGameScore] = useState(LOVE_ALL);
  const [playerOneScore, setPlayerOneScore] = useState(0);

  const incrementScore = () => {
    setPlayerOneScore(playerOneScore + POINT_ONE);
  };

  const calculateGameScore = () => {
    if (playerOneScore === POINT_ONE) {
      setGameScore(FIFTEEN_LOVE);
    } else if (playerOneScore === POINT_TWO) {
      setGameScore(THIRTY_LOVE);
    }
  };

  useEffect(() => {
    calculateGameScore();
  }, [playerOneScore]);

  return (
    <React.Fragment>
      <h1>{TITLE}</h1>
      <p data-testid={GAME_SCORE}>{gameScore}</p>
      <button data-testid={PLAYER_ONE} onClick={incrementScore}>
        {PLAYER_ONE}
      </button>
      <button>{PLAYER_TWO}</button>
    </React.Fragment>
  );
};

export { Game };

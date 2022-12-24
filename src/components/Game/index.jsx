import React from "react";
import { applicationConstants } from "../../constants/applicationConstants";
import "./index.css";

const { GAME_SCORE, LOVE_ALL, PLAYER_ONE, PLAYER_TWO, TITLE } =
  applicationConstants;

const Game = () => {
  return (
    <React.Fragment>
      <h1>{TITLE}</h1>
      <p data-testid={GAME_SCORE}>{LOVE_ALL}</p>
      <button>{PLAYER_ONE}</button>
      <button>{PLAYER_TWO}</button>
    </React.Fragment>
  );
};

export { Game };

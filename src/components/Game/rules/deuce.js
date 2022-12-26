import {
  hasPlayersScoresEqual,
  isPlayerScoresThree,
} from "../../../utils/compareScores";
import { score } from "../../../constants/applicationConstants";

const { DEUCE } = score;

const isCriteriaMatched = (playerOneScore, playerTwoScore) => {
  return (
    hasPlayersScoresEqual(playerOneScore, playerTwoScore) &&
    isPlayerScoresThree(playerOneScore)
  );
};

const getScore = () => {
  return DEUCE;
};

const deuce = {
  isCriteriaMatched,
  getScore,
};

export { deuce };

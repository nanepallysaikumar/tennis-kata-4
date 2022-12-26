import {
  isPlayerScoresFour,
  isScoreDifferenceGreaterThanOne,
} from "../../../utils/compareScores";
import { score } from "../../../constants/applicationConstants";

const { PLAYER_ONE_WIN } = score;

const isCriteriaMatched = (playerOneScore, playerTwoScore) => {
  return (
    isPlayerScoresFour(playerOneScore) &&
    isScoreDifferenceGreaterThanOne(playerOneScore, playerTwoScore)
  );
};

const getScore = () => {
  return PLAYER_ONE_WIN;
};

const playerWins = {
  isCriteriaMatched,
  getScore,
};

export { playerWins };

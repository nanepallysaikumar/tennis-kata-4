import {
  isAnyPlayerScoresFour,
  isScoreDifferenceGreaterThanOne,
} from "../../../utils/compareScores";
import { score } from "../../../constants/applicationConstants";

const { PLAYER_ONE_WIN, PLAYER_TWO_WIN } = score;

const isCriteriaMatched = (...playerScore) => {
  return (
    isAnyPlayerScoresFour(...playerScore) &&
    isScoreDifferenceGreaterThanOne(...playerScore)
  );
};

const getScore = (playerOneScore, playerTwoScore) => {
  return playerOneScore > playerTwoScore ? PLAYER_ONE_WIN : PLAYER_TWO_WIN;
};

const playerWins = {
  isCriteriaMatched,
  getScore,
};

export { playerWins };

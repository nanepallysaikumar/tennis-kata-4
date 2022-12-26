import {
  isplayerScoresMoreThanThree,
  isScoreDifferenceIsOne,
} from "../../../utils/compareScores";
import { score } from "../../../constants/applicationConstants";

const { PLAYER_ONE_ADVANTAGE } = score;

const isCriteriaMatched = (playerOneScore, playerTwoScore) => {
  return (
    isplayerScoresMoreThanThree(playerOneScore) &&
    isScoreDifferenceIsOne(playerOneScore, playerTwoScore)
  );
};

const getScore = () => {
  return PLAYER_ONE_ADVANTAGE;
};

const advantange = {
  isCriteriaMatched,
  getScore,
};

export { advantange };

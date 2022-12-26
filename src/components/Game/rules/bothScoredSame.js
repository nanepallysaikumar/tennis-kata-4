import {
  hasPlayersScoresEqual,
  isPlayerScoresOne,
  isPlayerScoresTwo,
} from "../../../utils/compareScores";
import {
  scoreLookUp,
  applicationConstants,
} from "../../../constants/applicationConstants";

const { ALL } = applicationConstants;

const isCriteriaMatched = (playerOneScore, playerTwoScore) => {
  return (
    hasPlayersScoresEqual(playerOneScore, playerTwoScore) &&
    (isPlayerScoresOne(playerOneScore) || isPlayerScoresTwo(playerOneScore))
  );
};

const getScore = (playerScore) => {
  return `${scoreLookUp[playerScore]}${ALL}`;
};

const bothScoredPointOneOrTwo = {
  isCriteriaMatched,
  getScore,
};

export { bothScoredPointOneOrTwo };

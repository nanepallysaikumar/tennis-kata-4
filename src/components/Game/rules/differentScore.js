import {
  hasPlayersScoresDifferent,
  hasplayersScoresNotMoreThanThree,
  hasAnyPlayersScored,
} from "../../../utils/compareScores";
import {
  applicationConstants,
  scoreLookUp,
} from "../../../constants/applicationConstants";

const { HYPHEN } = applicationConstants;

const isCriteriaMatched = (playerOneScore, playerTwoScore) => {
  return (
    hasAnyPlayersScored(playerOneScore, playerTwoScore) &&
    hasPlayersScoresDifferent(playerOneScore, playerTwoScore) &&
    hasplayersScoresNotMoreThanThree(playerOneScore, playerTwoScore)
  );
};

const getScore = (playerOneScore, playerTwoScore) => {
  return `${scoreLookUp[playerOneScore]}${HYPHEN}${scoreLookUp[playerTwoScore]}`;
};

const differentScoresBetweenOneAndThree = {
  isCriteriaMatched,
  getScore,
};

export { differentScoresBetweenOneAndThree };

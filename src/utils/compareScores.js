import { applicationConstants } from "../constants/applicationConstants";

const { ZERO_POINT, POINT_ONE, POINT_TWO, POINT_THREE } = applicationConstants;

const hasPlayersScoresEqual = (playerOneScore, playerTwoScore) => {
  return playerOneScore === playerTwoScore;
};

const hasPlayersScoresDifferent = (playerOneScore, playerTwoScore) => {
  return playerOneScore !== playerTwoScore;
};

const hasplayersScoresNotMoreThanThree = (playerOneScore, playerTwoScore) => {
  return (
    isplayerScoresNotMoreThanThree(playerOneScore) &&
    isplayerScoresNotMoreThanThree(playerTwoScore)
  );
};

const isplayerScoresNotMoreThanThree = (playerScore) => {
  return playerScore <= POINT_THREE;
};

const isplayerScoresMoreThanThree = (playerScore) => {
  return playerScore > POINT_THREE;
};

const isPlayerScoresOne = (playerScore) => {
  return playerScore === POINT_ONE;
};

const isPlayerScoresTwo = (playerScore) => {
  return playerScore === POINT_TWO;
};

const isplayerScoresNotLessThanThree = (playerScore) => {
  return playerScore >= POINT_THREE;
};

const isAnyPlayerScoresMoreThanThree = (playerOneScore, playerTwoScore) => {
  return (
    isplayerScoresMoreThanThree(playerOneScore) ||
    isplayerScoresMoreThanThree(playerTwoScore)
  );
};

const hasAnyPlayersScored = (playerOneScore, playerTwoScore) => {
  return isPlayerScored(playerOneScore) || isPlayerScored(playerTwoScore);
};

const hasBothPlayersScored = (playerOneScore, playerTwoScore) => {
  return isPlayerScored(playerOneScore) && isPlayerScored(playerTwoScore);
};

const isPlayerScored = (playerScore) => {
  return playerScore > ZERO_POINT;
};

const isScoreDifferenceGreaterThanOne = (playerOneScore, playerTwoScore) => {
  return Math.abs(playerOneScore - playerTwoScore) > POINT_ONE;
};

const isScoreDifferenceIsOne = (playerOneScore, playerTwoScore) => {
  return Math.abs(playerOneScore - playerTwoScore) === POINT_ONE;
};

export {
  hasPlayersScoresEqual,
  isPlayerScoresOne,
  isPlayerScoresTwo,
  hasPlayersScoresDifferent,
  hasplayersScoresNotMoreThanThree,
  hasBothPlayersScored,
  hasAnyPlayersScored,
  isAnyPlayerScoresMoreThanThree,
  isScoreDifferenceGreaterThanOne,
  isplayerScoresNotLessThanThree,
  isScoreDifferenceIsOne,
  isplayerScoresMoreThanThree,
};

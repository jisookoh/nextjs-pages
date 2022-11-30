import { SCORES } from "components/score";

const getScoreTextFromPercent = (percent) => {
  const score = percent * 100;
  if (score <= 30) return SCORES[0]; // safe
  if (score <= 50) return SCORES[1]; // low
  if (score <= 70) return SCORES[2]; // moderate
  if (score <= 90) return SCORES[3]; // dangerous
  else return SCORES[4]; // critical
};

export default getScoreTextFromPercent;

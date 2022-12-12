import styled from "styled-components";

export interface IScoreColorset {
  safe: string;
  low: string;
  moderate: string;
  dangerous: string;
  critical: string;
}

export const scoreColorSet: IScoreColorset = {
  safe: "#bb91e3",
  low: "#ba7fd4",
  moderate: "#ab6fe3",
  dangerous: "#9b4de3",
  critical: "#8a2be2",
};

export const scoreBgColorSet: IScoreColorset = {
  safe: "#E8F0FD",
  low: "#EBF6EC",
  moderate: "#FFF7E4",
  dangerous: "#ff6636",
  critical: "#de0909",
};

export const scoreBorderColorSet: IScoreColorset = {
  safe: "rgba(64, 133, 241, .14)",
  low: "rgba(92, 184, 93, .14)",
  moderate: "rgba(255, 188, 29, .14)",
  dangerous: "#ff6636",
  critical: "#de0909",
};

export const Scores = {
  safe: "safe",
  low: "low",
  moderate: "moderate",
  dangerous: "dangerous",
  critical: "critical",
} as const;

const ScorePercent = {
  safe: 0.2,
  low: 0.4,
  moderate: 0.6,
  dangerous: 0.8,
  critical: 0.99,
};

export const ScoreNumbers = {
  0.0: 0.2, // safe
  0.5: 0.3, // safe
  1.0: 0.4, // low
  1.5: 0.5, // low
  2.0: 0.6, // moderate
  2.5: 0.7, // moderate
  3.0: 0.8, // dangerous
  3.5: 0.9, // dangerous
  4.0: 0.99, // critical
} as const;

const ScoreNumPercent = {
  0.0: 0.2,
  0.5: 0.3,
  1.0: 0.4,
  1.5: 0.5,
  2.0: 0.6,
  2.5: 0.7,
  3.0: 0.8,
  3.5: 0.9,
  4.0: 0.99,
};

// 100%인 경우(critical) 99%로 낮춰줌 (차트 미관상의 이유로)
export const getPercentFromScoreNumber = (score: number): number => {
  let percent = score * 20 * (1 / 100);
  if (percent === 1) percent = percent - 0.01;
  return percent;
};

export type ScoreNumberTypes = keyof typeof ScoreNumbers;
// export type ScorePercentTypes = typeof ScoreNumbers[keyof typeof ScoreNumbers];
// export const SCORE_PERCENT = [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.99] as ScorePercentTypes[];
export type ScoreTypes = typeof Scores[keyof typeof Scores];
export const SCORES = ["safe", "low", "moderate", "dangerous", "critical"] as ScoreTypes[];

export const getPercentFromScoreString = (score: ScoreTypes): number => ScorePercent[score];
export const getPercentNumFromScoreNumber = (score_num: ScoreNumberTypes): number => ScoreNumPercent[score_num];
export const getStringFromScoreNumber = (score: number): ScoreTypes => SCORES[score - 1];

export const ScoreLabel = styled.div<{ score: string; margin?: string; fontWeight?: string }>`
  ${({ margin }) => (margin ? `margin: ${margin};` : "margin: auto;")};
  height: 20px;
  line-height: 18px !important;
  display: inline-block;
  flex: none;
  position: relative;
  padding: 0 3px;
  font-size: 1.2rem !important;
  background: ${({ score }) => scoreBgColorSet[score.toLowerCase()]};
  border-color: ${({ score }) => scoreBorderColorSet[score.toLowerCase()]};
  color: ${({ score }) => {
    if (score.toLowerCase() === "dangerous" || score.toLowerCase() === "critical") return `#ffffff;`;
    return scoreColorSet[score.toLowerCase()];
  }} !important;
  border-width: 1px;
  border-style: solid;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 600)};
  border-radius: 3px;
`;

export const scoreSetArr = [
  {
    text: "asset_report_score_desc_normal",
    color: scoreColorSet.safe,
    icon: "score_icon_safe.svg",
  },
  {
    text: "asset_report_score_desc_normal",
    color: scoreColorSet.low,
    icon: "score_icon_low.svg",
  },
  {
    text: "asset_report_score_desc_normal",
    color: scoreColorSet.moderate,
    icon: "score_icon_moderate.svg",
  },
  {
    text: "asset_report_score_desc_may_malicious",
    color: scoreColorSet.dangerous,
    icon: "score_icon_dangerous.svg",
  },
  {
    text: "asset_report_score_desc_malicious",
    color: scoreColorSet.critical,
    icon: "score_icon_critical.svg",
  },
];

import React, { useState, useEffect } from "react";
import { keyframes } from "styled-components";
import {
  MAX_DEGREE,
  RADIUS,
  STROKE_WIDTH,
  SIZE,
  POS,
  VIEW_BOX,
  RADIUS_SMALL,
  SIZE_SMALL,
  STROKE_WIDTH_SMALL,
  POS_SMALL,
  VIEW_BOX_SMALL,
} from "./chartConfig";
import { scoreColorSet } from "components/score";
import getScoreTextFromPercent from "./getScoreTextFromPercent";
import getArc from "./getArc";
import useBrowserSize from "hooks/useBrowserSize";
import { device } from "components/style/global-theme";
import { colorAnimation, FadeDots, loadingAnimation, LoadingPath, Path } from "./chartStyle";

interface IRoundChartProps {
  percent: number; // 0 ~ 1 사이의 숫자
  color: string,
  isLoading?: boolean;
}

interface IPercentLabelProps {
  percent: number;
  pos: number;
  fontSize: number[];
  color: string;
}

const PercentLabelComponent = ({ percent, pos, fontSize, color}: IPercentLabelProps) => {
    const textPos = pos + 3;
    const textTranslate = `translate(${textPos} ${textPos})`;

    return (
      <g transform={textTranslate}>
        <text textAnchor="middle" fontFamily="Inter" dominantBaseline="middle">
          <tspan fill={color} fontSize={fontSize[0]} fontWeight={600} alignmentBaseline="baseline">
            {(percent * 100).toFixed(1)}
          </tspan>
          <tspan fill={color} fontSize={fontSize[1]} fontWeight={400} alignmentBaseline="baseline">
            %
          </tspan>
        </text>
      </g>
    );
}

const PercentLabel = React.memo(PercentLabelComponent);

export default function ScoreChart({ percent, color }: IRoundChartProps) {
  const [windowWidth] = useBrowserSize();
  const [isTablet, setIsTablet] = useState(false);
  useEffect(() => {
    if (windowWidth <= device.tabletL) setIsTablet(true);
    else setIsTablet(false);
  }, [windowWidth]);

  // 반응형 chart size set
  const radius = isTablet ? RADIUS_SMALL : RADIUS;
  const chartSize = isTablet ? SIZE_SMALL : SIZE;
  const viewBox = isTablet ? VIEW_BOX_SMALL : VIEW_BOX;
  const circlePos = isTablet ? POS_SMALL : POS;
  const strokeWidth = isTablet ? STROKE_WIDTH_SMALL : STROKE_WIDTH;
  const rotateG = `rotate(-90 ${circlePos} ${circlePos})`;
  const percentFontSize = isTablet ? [22, 13] : [26, 16];

  const scoreText = getScoreTextFromPercent(percent);
  const pathColor = scoreColorSet[scoreText];
  const degree = MAX_DEGREE * percent;
  const data = { x: circlePos, y: circlePos, radius: radius, degree: degree };
  const targetRad = 2 * Math.PI * radius * percent + 1;
  // const targetRestRad = 2 * Math.PI * (1 - percent) * radius;
  const targetRestRad = 1000;
  const adjustment = percent >= 0.95 && percent < 1 ? 15 : 3;
  const strokeDasharray = `${targetRad - adjustment} ${targetRestRad}`;

  const loadingPercent = 20;
  const loadingDegree = MAX_DEGREE * loadingPercent;
  const loadingData = { ...data, degree: loadingDegree };
  const loadingColor = "#bbb";

  const rotateAnimation = keyframes`
  0% {
    stroke-dasharray: 0 1000px;
  }
  100% {
    stroke-dasharray: ${strokeDasharray};
  }
`;

  return (
    <svg width={chartSize} height={chartSize} viewBox={viewBox}>
      <g transform={rotateG}>
        <circle cx={circlePos} cy={circlePos} r={radius} stroke="#ACC0C7" strokeOpacity={0.3} fill="none" strokeWidth={strokeWidth} />
        { percent < 0 && (
          <LoadingPath
            d={getArc(loadingData)}
            stroke={loadingColor}
            fill="none"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            loadingAnimation={loadingAnimation}
            colorAnimation={colorAnimation}
          />
        )}
        {percent > 0 && (
          <Path
            d={getArc(data)}
            stroke={pathColor}
            fill="none"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            animation={rotateAnimation}
            boxShadowColor={pathColor}
          />
        )}
      </g>
      {percent < 0 ? <FadeDots pos={circlePos} /> : <PercentLabel percent={percent} pos={circlePos} fontSize={percentFontSize} color={color} />}
    </svg>
  );
}

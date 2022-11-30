import { scoreColorSet } from "components/score";
import React from "react";
import styled, { keyframes, Keyframes } from "styled-components";

export const loadingAnimation = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    stroke-dasharray: 60, 2000;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 160, 4000;
  }

  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
    stroke-dasharray: 60, 2000;
    stroke-dashoffset: 0;
  }
`;

export const colorAnimation = keyframes`
  0% {
    stroke: ${scoreColorSet.safe};
  }
  25% {
    stroke: ${scoreColorSet.low};
  }
  50% {
    stroke: ${scoreColorSet.moderate};
  }
  75% {
    stroke: ${scoreColorSet.dangerous};
  }
  100% {
    stroke: ${scoreColorSet.critical};
  }
`;

export const searchUsageColorAnimation = keyframes`
  0% {
    stroke: #90A7FF;
  }
  50% {
    stroke: #7656CF;
  }
  100% {
    stroke: #FF59B3;
  }
`;

const jump = keyframes`
  0% {
    transform: translateY(-2px);
  }
  50% {
    transform: translateY(2px);
  }
  100% {
    transform: translateY(-2px);
  }
`;

export const fadeOut = keyframes`
  0% { 
    opacity: 1;
  }
  100% { 
    opacity: 0;
  }
`;

const JumpDot = styled.circle<{ delay: string }>`
  transform: translateY(-2px);
  animation: ${jump} 1s infinite cubic-bezier(0.1, 0, 0.3, 0.8) alternate;
  animation-delay: ${({ delay }) => delay};
`;

const FadeDot = styled.circle<{ delay: string }>`
  transform: translateY(-2px);
  -webkit-animation: ${fadeOut} 2s infinite ease-in-out;
  animation: ${fadeOut} 2s infinite ease-in-out;
  animation-delay: ${({ delay }) => delay};
`;

interface DotsProps {
  pos: number;
}

const JumpDotsComponent = ({ pos }: DotsProps) => (
  <g transform={`translate(${pos - 10} ${pos})`}>
    <JumpDot cx="4" cy="0" r="2" fill="#C4C4C4" delay="0" />
    <JumpDot cx="12" cy="0" r="2" fill="#C4C4C4" delay="0.5s" />
    <JumpDot cx="20" cy="0" r="2" fill="#C4C4C4" delay="1s" />
  </g>
);
export const JumpDots = React.memo(JumpDotsComponent);

const FadeDotsComponent = ({ pos }: DotsProps) => (
  <g transform={`translate(${pos - 10} ${pos})`}>
    <FadeDot cx="4" cy="0" r="2" fill="#bbb" delay="0" />
    <FadeDot cx="12" cy="0" r="2" fill="#bbb" delay="0.3s" />
    <FadeDot cx="20" cy="0" r="2" fill="#bbb" delay="0.6s" />
  </g>
)
export const FadeDots = React.memo(FadeDotsComponent);

export const Path = styled.path<{ animation: Keyframes; boxShadowColor?: string }>`
  ${({ boxShadowColor }) =>
    boxShadowColor &&
    `
    -webkit-filter: drop-shadow(0 0 5px ${boxShadowColor});
    filter: drop-shadow(0 0 5px ${boxShadowColor});
  `};
  animation: ${({ animation }) => animation} 1s 1 cubic-bezier(0.1, 0, 0.3, 0.8) alternate;
`;

export const LoadingPath = styled.path<{ loadingAnimation: Keyframes; colorAnimation: Keyframes }>`
  -webkit-transform-origin: center center;
  -ms-transform-origin: center center;
  transform-origin: center center;
  animation: ${({ loadingAnimation }) => loadingAnimation} 0.9s ease-in-out infinite,
    ${({ colorAnimation }) => colorAnimation} 2.4s infinite;
`;

// 여기서 글로벌 테마를 적용하여 공통 스타일가이드를 따를 수 있음.
// https://styled-components.com/docs/api#typescript

import baseStyled, { DefaultTheme, css, ThemedStyledInterface } from "styled-components";
// import { scoreColorSet } from "components/common/score";
import { IDevice, Media } from "./styled";

type BackQuoteArgs = string[];

export const device: IDevice = {
  mobileS: 320, // iPhone SE(320)
  mobileM: 360, // Galaxy 10(360), iPhone XS(375), iPhone X(375)
  mobileL: 450, // iPhone XR(414), iPhone XS Max(428) ~
  tablet: 768, // iPad mini 4(768) (태블릿 PC 최소 사이즈)
  tabletL: 1024, // iPad Pro 12(1024) (태블릿 PC 최대 사이즈)
  pcS: 1200, // Laptop 최소 사이즈
  pcM: 1400,
  pcL: 1600,
};

const media: Media = {
  mobileS: (...args: BackQuoteArgs) => undefined,
  mobileM: (...args: BackQuoteArgs) => undefined,
  mobileL: (...args: BackQuoteArgs) => undefined,
  tablet: (...args: BackQuoteArgs) => undefined,
  tabletL: (...args: BackQuoteArgs) => undefined,
  pcS: (...args: BackQuoteArgs) => undefined,
  pcM: (...args: BackQuoteArgs) => undefined,
  pcL: (...args: BackQuoteArgs) => undefined,
};

Object.keys(device).reduce((acc: Media, label: string) => {
  switch (label) {
    case "mobileS":
      acc.mobileS = (...args: BackQuoteArgs) =>
        css`
          @media only screen and (max-width: ${device.mobileS}px) {
            ${args}
          }
        `;
      break;
    case "mobileM":
      acc.mobileM = (...args: BackQuoteArgs) =>
        css`
          @media only screen and (max-width: ${device.mobileM}px) {
            ${args}
          }
        `;
      break;
    case "mobileL":
      acc.mobileL = (...args: BackQuoteArgs) =>
        css`
          @media only screen and (max-width: ${device.mobileL}px) {
            ${args}
          }
        `;
      break;
    case "tablet":
      acc.tablet = (...args: BackQuoteArgs) => {
        return css`
          @media only screen and (max-width: ${device.tablet}px) {
            ${args}
          }
        `;
      };
      break;
    case "tabletL":
      acc.tabletL = (...args: BackQuoteArgs) =>
        css`
          @media only screen and (max-width: ${device.tabletL}px) {
            ${args}
          }
        `;
      break;
    case "pcS":
      acc.pcS = (...args: BackQuoteArgs) =>
        css`
          @media only screen and (max-width: ${device.pcS}px) {
            ${args}
          }
        `;
      break;
    case "pcM":
      acc.pcM = (...args: BackQuoteArgs) =>
        css`
          @media only screen and (max-width: ${device.pcM}px) {
            ${args}
          }
        `;
      break;
    case "pcL":
      acc.pcL = (...args: BackQuoteArgs) =>
        css`
          @media only screen and (max-width: ${device.pcL}px) {
            ${args}
          }
        `;
      break;
    default:
      break;
  }
  return acc;
}, media);

const fontColorSet = {
  title: "#000",
  text: "#151515",
  desc: "#8B95A1",
  vuln: "#d74522",
  vulnHover: "#bf3312",
  cert: "#333333",
  gray: "#7b7b7e",
  darkgray: "#646466",
  main: "#113354",
  mint: "#0da3ad",
  cardTitle: "#19191a",
  blue: "#1f5fd8",
  noData: "#b3b3b3",
  link: "#334f8c",
};

const borderColorSet = {
  normal: "#e6ecee",
};

const globalTheme: DefaultTheme = {
  device,
  media,
  fonts: {
    main: "14px",
  },
  colors: {
    main: "#3256ad",
  },
  card: {
    common: `border-radius: 6px;box-shadow: 0 5px 15px 0 #f1f1f1;background-color:#fff;`,
    border: `border-radius:6px;border:solid 1px #f5f5f5;background-color:#fff;`,
  },
  fontColorSet,
  borderColorSet,
};

export const styled = baseStyled as ThemedStyledInterface<DefaultTheme>;
export default globalTheme;

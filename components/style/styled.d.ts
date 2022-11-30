// styled-components의 타입정의를 불러와 내가 사용할 신규 타입정의 추가 & 확장함

// import original module declarations
import "styled-components";
import { CSSProp } from "styled-components";

interface IDevice {
  mobileS: number;
  mobileM: number;
  mobileL: number;
  tablet: number;
  tabletL: number;
  pcS: number;
  pcM: number;
  pcL: number;
}

interface Media {
  mobileS: (...args: BackQuoteArgs) => CSSProp | undefined;
  mobileM: (...args: BackQuoteArgs) => CSSProp | undefined;
  mobileL: (...args: BackQuoteArgs) => CSSProp | undefined;
  tablet: (...args: BackQuoteArgs) => CSSProp | undefined;
  tabletL: (...args: BackQuoteArgs) => CSSProp | undefined;
  pcS: (...args: BackQuoteArgs) => CSSProp | undefined;
  pcM: (...args: BackQuoteArgs) => CSSProp | undefined;
  pcL: (...args: BackQuoteArgs) => CSSProp | undefined;
}

interface IFontColorSet {
  title: string;
  text: string;
  desc: string;
  vuln: string;
  vulnHover: string;
  cert: string;
  gray: string;
  darkgray: string;
  main: string;
  mint: string;
  cardTitle: string;
  blue: string;
  noData: string;
  link: string;
}

interface IBorderColorSet {
  normal: string;
}

// and extend theme!
declare module "styled-components" {
  // 디폴트 테마를 지정할 수 있음
  export interface DefaultTheme {
    device: IDevice;
    media: Media;
    fonts: {
      main: string;
    };
    colors: {
      main: string;
    };
    card: {
      common: string;
      border: string;
    };
    fontColorSet: IFontColorSet;
    borderColorSet: IBorderColorSet;
  }
}

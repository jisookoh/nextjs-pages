import Footer from "components/navigator/Footer";
import { useRouter } from "next/router";
import styled from "styled-components";
import Header from "../navigator/Header";

interface IBasicLayoutProps {
  children: JSX.Element | JSX.Element[] | string;
}

const BasicLayout = ({ children}: IBasicLayoutProps) => {

  const router = useRouter();

  return (
    <BodyWrap route={router?.pathname} >
        <Header />
        <Main>{children}</Main>
        <Footer />
    </BodyWrap>
  );
};

const BodyWrap = styled.div<{ route:String }>`
    font-family: "Noto Sans KR", "Open Sans", sans-serif;
    background-color:  ${({ route }) => route === "/" ? "#111" : "#f0f0f0"};
    overflow: hidden;

    * {
      color : ${({ route }) => route === "/" ? "#fff" : "#111"};
    }

   
`;

const Main = styled.div`
    width: 100%;
`;


export default BasicLayout;
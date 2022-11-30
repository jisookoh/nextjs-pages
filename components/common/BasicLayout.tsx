import Footer from "components/navigator/Footer";
import styled from "styled-components";
import Header from "../navigator/Header";

interface IBasicLayoutProps {
  children: JSX.Element | JSX.Element[] | string;
}

const BasicLayout = ({ children}: IBasicLayoutProps) => {


  return (
    <BodyWrap>
        <Header />
        <Main>{children}</Main>
        <Footer />
    </BodyWrap>
  );
};

const BodyWrap = styled.div`
    height: 100vh;
    font-family: "Noto Sans KR", "Open Sans", sans-serif;
`;

const Main = styled.div`
    width: 100%;
`;


export default BasicLayout;

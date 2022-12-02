import React from "react";
import Link from "next/link";
import styled from "styled-components";


const Footer = () => {

    const handleClickTopButton = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
      };

    return (
        <FooterWrapper>
            <FooterNavigation>
                <FooterNavigationItem>
                    <Button onClick={handleClickTopButton}>Back to Top</Button>
                </FooterNavigationItem>
                <FooterNavigationItem>
                    <Link href="/about">About</Link>
                </FooterNavigationItem>
                <FooterNavigationItem>
                    <Link href="/">Work</Link>
                </FooterNavigationItem>
            </FooterNavigation>
            <FooterCopyright>
                © 2022 JISOO KOH
            </FooterCopyright>
        </FooterWrapper>
    );
};

const FooterWrapper = styled.div`
    max-width: 500px;
    margin: 0 auto;
    padding 50px 0;

    ${({ theme }) => theme.media.tabletL`
        padding: 5rem 20px;
    `};
`;

const FooterNavigation = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    margin-bottom: 20px;
`;

const FooterNavigationItem = styled.li`
    padding: 0;
    flex: 1 0 0;
    text-align: center;

    & > * {
        font-size: 1.5rem;
        font-weight: 600;
        font-family: Montserrat, sans-serif;
    }
`;

const FooterCopyright = styled.span`
    display: block;
    font-size: 1.3rem;
    font-family: Poppins, sans-serif;
    text-align: center;
`;

const Button = styled.button`
    background-color: transparent;
    color: inherit;
    border-width: 0px;
    padding: 0px;
    cursor: pointer;
`;


export default Footer;

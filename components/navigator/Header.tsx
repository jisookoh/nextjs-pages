import React from "react";
import Link from "next/link";
import styled from "styled-components";
import menus from "./menus";
import { useRouter } from "next/router";

export const HeaderLogo = () => (
    <Logo>
        <Link href="/">
            <h2>Js Portpolio</h2>
        </Link>
    </Logo>
  );

const Header = () => {

    const router = useRouter();
    const pathname = router.pathname;
    // const [addHeader, setAddHeader] = useState<string | undefined>();

    // useEffect(() => {
    //     window.addEventListener('scroll', isSticky);
    //     return () => {
    //         window.removeEventListener('scroll', isSticky);
    //     }
    // }, [])

    // const isSticky = (e) => {
    //     const scrollTop = window.scrollY;
    //     scrollTop >= 10 ? setAddHeader("is-sticky") : setAddHeader('');
    // }


    return (
        <HeaderWrap className="header-section">
            <InnerCont>
                <HeaderLogo />
                <Nav>
                    <Menus pathname={pathname}>
                        {menus.map((m) => (
                            <MenuItem key={m.title} >
                                <Link href={m.link}>
                                <h5>{m.title}</h5>
                                </Link>
                            </MenuItem>
                        ))}
                    </Menus>
                </Nav>
            </InnerCont>
        </HeaderWrap>
    );
};

const HeaderWrap = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    height: 7rem;
    display: flex;
`;

const InnerCont = styled.div`
    margin: auto;
    display: flex;
    max-width: 1680px;
    width: 96%;
    align-items: center;
    justify-content: space-between;

    ${({ theme }) => theme.media.tabletL`
        padding: 0 20px;
        margin: 0;
        width: 100%;
    `};
`;

const Nav = styled.nav`
    margin-left: 20px;
    display: flex;
`;

const Logo = styled.strong`
    h2 {
        display: block;
        margin: 0;
        font-family: Montserrat, sans-serif;
        font-size: 2.4rem;
        font-weight: 800;
    }
`;

const Menus = styled.ul<{pathname:String}>`
  display: flex;
  list-style: none;

  ${({ pathname }) => pathname !== "/about" ? `
    > li:first-child {
        h5 {
            opacity: 1;
        }
    }
  ` : `
    > li:last-child {
        h5 {
            opacity: 1;
        }
    }
  `}
`;

const MenuItem = styled.li`
    h5 {
        display: inline-block;
        margin: 0;
        padding: 9px 1.5rem;
        opacity: 0.6;
        font-family: Poppins, sans-serif;
        font-size: 1.5rem;
        line-height: 22px;
        font-weight: 600;
        text-align: center;
        letter-spacing: 1px;
        text-transform: uppercase;

        &:hover {
            opacity: 1;
        }
    }

    ${({ theme }) => theme.media.tablet `
        &:last-child {
            h5 {
                padding-right: 0;
            }
        }
    `}
`;

const MemoizedHeader = React.memo(Header);
export default MemoizedHeader;

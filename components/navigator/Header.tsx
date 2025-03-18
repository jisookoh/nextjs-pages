import React, { useEffect } from "react";
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

  useEffect(() => {
    const headerSec = document.querySelectorAll<HTMLElement>(".headerBox")[0];
    let lastScrollY = 0;
    let navbarHeight = headerSec.offsetHeight;
    let delta = 5;
    let didScroll;

    if (window.scrollY <= 0) {
      headerSec.style.top = "0";
    }

    addEventListener("scroll", (e) => {
      didScroll = true;
    });

    setInterval(function () {
      if (didScroll) {
        hasScrolled();
        didScroll = false;
      }
    }, 250);

    function hasScrolled() {
      let st = window.scrollY;

      if (Math.abs(lastScrollY - st) <= delta) return;
      if (st > lastScrollY && st > navbarHeight) {
        headerSec.style.top = "-7rem";
      } else {
        if (st + window.outerHeight < document.body.scrollHeight) {
          headerSec.style.top = "0";
        }
      }

      lastScrollY = st;
    }
  });

  return (
    <HeaderWrap className="headerBox">
      <InnerCont>
        <HeaderLogo />
        <Nav>
          <Menus pathname={pathname}>
            {menus.map((m) => (
              <MenuItem key={m.title}>
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
  top: -7rem;
  left: 0;
  width: 100%;
  z-index: 10;
  height: 7rem;
  display: flex;
  transition: all 0.5s;
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

const Menus = styled.ul<{ pathname: String }>`
  display: flex;
  list-style: none;

  ${({ pathname }) => {
    switch (pathname) {
      case "/about":
        return `
                > li:nth-child(2) {
                        h5 {
                            opacity: 1;
                        }
                    }
            `;
      case "/movie":
        return `
                > li:last-child {
                    h5 {
                        opacity: 1;
                    }
                }
            `;
      default:
        return `
                > li:first-child {
                    h5 {
                        opacity: 1;
                    }
                }
            `;
    }
  }}
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

  ${({ theme }) => theme.media.tablet`
        &:last-child {
            h5 {
                padding-right: 0;
            }
        }
    `}
`;

const MemoizedHeader = React.memo(Header);
export default MemoizedHeader;

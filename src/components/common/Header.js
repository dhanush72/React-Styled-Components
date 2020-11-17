import React, { useState, useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { Link as ReactRouterDomLink, useLocation } from "react-router-dom";
import { Toggle } from "./Toggle";

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background-image: linear-gradient(
    to right,
    ${(p) => p.theme.primary},
    ${(p) => p.theme.secondary}
  );
  border-bottom: 5px solid ${(p) => p.theme.secondary};
`;

const HeaderH1 = styled.h1`
  color: white;
  display: block;
  text-align: center;
  margin: auto 0;
  font-size: clamp(1.2rem, 5vw, 1rem);
`;

const Menu = styled.nav`
  display: ${(p) => (p.open ? "block" : "none")};
  font-family: "Open Sans";
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 8px;
  box-sizing: border-box;
  border-bottom: 3px solid ${(p) => p.theme.secondaryColor};
  background: ${(p) => p.theme.bodyBackgroundColor};

  @media (min-width: 768px) {
    display: flex;
    background: none;
    left: initial;
    top: initial;
    margin: auto 0 auto auto;
    border-bottom: none;
    position: relative;
    width: initial;
  }

  a {
    text-decoration: none;
  }
`;

const Link = ({ isActive, children, ...others }) => {
  return <ReactRouterDomLink {...others}>{children}</ReactRouterDomLink>;
};

const StyledLink = styled(Link)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  font-weight: ${(p) => (p.isActive ? "bold" : "normal")};
  color: ${(p) => p.theme.bodyFontColor};
`;

const MobileMenuIcon = styled.div`
  display: none;
  margin: auto 0 auto auto;
  width: 35px;
  min-width: 35px;
  padding: 5px;
  cursor: pointer;

  > div {
    height: 3px;
    background: ${(p) => p.theme.bodyFontColor};
    margin: 5px 0;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    display: inline-block;
  }
`;

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { id, setTheme } = useContext(ThemeContext);

  return (
    <>
      <HeaderWrapper>
        <HeaderH1>Styled Components</HeaderH1>
        <MobileMenuIcon onClick={() => setMenuOpen(!menuOpen)}>
          <div />
          <div />
          <div />
        </MobileMenuIcon>
        <Menu open={menuOpen}>
          <StyledLink to="/" isActive={location.pathname === "/"}>
            Home
          </StyledLink>
          <StyledLink to="/login" isActive={location.pathname === "/login"}>
            Login
          </StyledLink>
          <Toggle isActive={id === "dark"} onToggle={setTheme} />
        </Menu>
      </HeaderWrapper>
    </>
  );
};

export default Header;

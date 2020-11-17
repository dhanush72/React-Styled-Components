import React, { useState } from "react";
import styled from "styled-components";
import { Link as ReactRouterDomLink, useLocation } from "react-router-dom";

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background-image: linear-gradient(to right, #f8049c, #fdd54f);
  border-bottom: 5px solid #fdd54f;
`;

const Menu = styled.nav`
  display: ${({ open }) => (open ? "block" : "none")};
  text-align: center;
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 8px;
  border-bottom: 3px solid #fdd54f;
  background: white;

  @media screen and (max-width: 768px) {
    display: flex;
    background: none;
    left: initial;
    top: initial;
    position: relative;
    width: initial;
    border-bottom: none;
    margin: auto 0 auto auto;
  }

  a {
    text-decoration: none;
  }
`;

const Link = ({ isActive, children, ...others }) => {
  return <ReactRouterDomLink {...others}>{children}</ReactRouterDomLink>;
};

const StyledLink = styled(Link)`
  color: ${({ isActive }) => (isActive ? "#303952" : "#303952")};
  padding: 4px 8px;
  display: block;
  font-weight: ${({ isActive }) => (isActive ? "600" : "normal")};
`;

const MobileMenuIcon = styled.div`
  margin: auto 0 auto auto;
  width: 25px;
  min-width: 25px;
  cursor: pointer;

  > div {
    height: 3px;
    background: black;
    margin: 5px 0;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <HeaderWrapper>
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
        </Menu>
      </HeaderWrapper>
    </>
  );
};

export default Header;

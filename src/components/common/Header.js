import React from "react";
import styled from "styled-components";
import { Link as ReactRouterDomLink, useLocation } from "react-router-dom";

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background: #eee;
`;

const Menu = styled.nav`
  display: flex;
  position: relative;
  width: initial;
  border-bottom: none;
  margin: auto 0 auto auto;

  a {
    text-decoration: none;
  }
`;

const Link = ({ isActive, children, ...others }) => {
  return <ReactRouterDomLink {...others}>{children}</ReactRouterDomLink>;
};

const StyledLink = styled(Link)`
  color: ${({ isActive }) => (isActive ? "#303952" : "")};
  padding: 4px 8px;
  display: block;
  font-weight: ${({ isActive }) => (isActive ? "600" : "normal")};

  &:hover {
    color: #775ada;
  }
`;

const Header = () => {
  const location = useLocation();

  return (
    <>
      <HeaderWrapper>
        <Menu>
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

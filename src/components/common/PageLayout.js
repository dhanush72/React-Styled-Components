import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Content = styled.main`
  max-width: 800px;
  margin: 80px auto 0 auto;
  padding: 0 16px;
`;

export const PageLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
};

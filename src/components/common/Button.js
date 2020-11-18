import styled, { css } from "styled-components";

const largeStyles = ({ large }) => {
  if (large) {
    return css`
      padding: 16px 40px;
    `;
  } else {
    return css`
      padding: 10px 32px;
    `;
  }
};

const Button = styled.button`
  color: white;
  font-family: "Poppins";
  background: ${({ primary }) => (primary ? "#775ada" : "#000")};
  font-size: ${({ big }) => (big ? "20px" : "16px")};
  /* padding: ${({ large }) => (large ? "16px 40px" : "10px 32px")}; */
  ${largeStyles}
  box-shadow: none;
  border: none;
  width: 100%;
  min-width: 250px;
  display: block;
  cursor: pointer;
  white-space: none;
  border-radius: ${({ round }) => (round ? "50px" : "none")};

  /* &:disabled {
    color: #000;
    background: #eee;

    &:hover {
      color: #000;
      background: #eee;
    }
  } */

  &:hover {
    color: white;
    background: #775ada;
  }

  &:focus {
    outline: none;
  }
`;

export { Button };

import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => props.theme[props.variant]};
  color: ${(props) => props.theme.white};
  white-space: nowrap;
  padding: 0.5em 1em;
  border-radius: 100px;
  border: none;
  font-size: inherit;
  cursor: pointer;
  display: block;
  width: fit-content;
  transition: all 150ms;

  :hover {
    background-color: ${(props) => props.theme[`${props.variant}Dark`]};
  }
`;

export const StyledLinkButton = styled(StyledButton).attrs({ as: "a" })`
  text-decoration: none;
`;

export default StyledButton;

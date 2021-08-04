import { func, node, string } from "prop-types";

import StyledButton, { StyledLinkButton } from "./button.styles";

const Button = ({ children, href, onClick, variant }) =>
  href ? (
    <StyledLinkButton href={href} variant={variant}>
      {children}
    </StyledLinkButton>
  ) : (
    <StyledButton onClick={onClick} variant={variant}>
      {children}
    </StyledButton>
  );

Button.propTypes = {
  children: node.isRequired,
  href: string,
  onClick: func,
};

Button.defaultProps = {
  variant: "primary",
};

export default Button;

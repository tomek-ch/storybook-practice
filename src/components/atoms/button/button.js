import { func, node, string } from "prop-types";

const Button = ({ children, href, onClick }) =>
  href ? (
    <a href={href}>{children}</a>
  ) : (
    <button onClick={onClick}>{children}</button>
  );

Button.propTypes = {
  children: node.isRequired,
  href: string,
  onClick: func,
};

export default Button;

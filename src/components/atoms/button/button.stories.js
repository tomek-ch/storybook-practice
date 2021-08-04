import Button from "./button";

export const basicButton = () => <Button>Basic button</Button>;
export const functionButton = () => (
  <Button onClick={() => alert("hello")}>Function button</Button>
);
export const linkButton = () => <Button href="#">Link button</Button>;

export default {
  component: Button,
  title: "Button",
};

import Button from "./button";

export default {
  component: Button,
  title: "Button",
  argTypes: {
    children: {
      control: { type: "text" },
    },
  },
};

const Template = (args) => <Button {...args} />;
export const Basic = Template.bind({});
Basic.args = {
  variant: "primary",
  children: "Basic button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: "Secondary button",
};

export const Link = Template.bind({});
Link.args = {
  variant: "primary",
  children: "Link button",
  href: "#",
};

export const Function = Template.bind({});
Function.args = {
  variant: "primary",
  children: "Function button",
  onClick: () => alert("Hello"),
};

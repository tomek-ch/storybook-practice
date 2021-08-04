import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "./button";

export const text = () => (
  <Button onClick={action("clicked")}>Just a button</Button>
);

export const emoji = () => <Button onClick={action("clicked")}>😋</Button>;

export default {
  component: Button,
  title: "Button",
};

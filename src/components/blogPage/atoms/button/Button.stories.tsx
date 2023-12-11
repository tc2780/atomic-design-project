import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { JSX } from "react/jsx-runtime";

const meta: Meta<typeof Button> = {
    component: Button,
    title: "BlogPage/Atoms/Button",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const button: Story = (args: JSX.IntrinsicAttributes) => (
    <Button data-testId="InputField-id"  {...args}/>
);

button.args = {
    // error: false
}

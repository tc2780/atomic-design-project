import { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";
import { JSX } from "react/jsx-runtime";

const meta: Meta<typeof Input> = {
    component: Input,
    title: "BlogPage/Atoms/Input",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Input>;

export const input: Story = (args: JSX.IntrinsicAttributes) => (
    <Input data-testId="InputField-id"  {...args}/>
);

input.args = {
    // error: false
}

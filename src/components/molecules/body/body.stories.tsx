import { Meta, StoryObj } from "@storybook/react";
import Body from "./body";
import { JSX } from "react/jsx-runtime";

const meta: Meta<typeof Body> = {
    component: Body,
    title: "Molecules/Body",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Body>;

export const body: Story = (args: JSX.IntrinsicAttributes) => (
    <Body data-testId="InputField-id"  {...args}/>
);

body.args = {
    // error: false
}

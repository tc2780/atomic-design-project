import { Meta, StoryObj } from "@storybook/react";
import Wings from "./wings";
import { JSX } from "react/jsx-runtime";

const meta: Meta<typeof Wings> = {
    component: Wings,
    title: "Molecules/Wings",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Wings>;

export const wings: Story = (args: JSX.IntrinsicAttributes) => (
    <Wings data-testId="InputField-id"  {...args}/>
);

wings.args = {
    // error: false
}

import { Meta, StoryObj } from "@storybook/react";
import Wing from "./Wing";
import { JSX } from "react/jsx-runtime";

const meta: Meta<typeof Wing> = {
    component: Wing,
    title: "Atoms/Wing",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Wing>;

export const wing: Story = (args: JSX.IntrinsicAttributes) => (
    <Wing data-testId="InputField-id"  {...args}/>
);

wing.args = {
    // error: false
}

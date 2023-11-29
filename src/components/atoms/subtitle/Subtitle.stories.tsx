import { Meta, StoryObj } from "@storybook/react";
import Subtitle from "./Subtitle";
import { JSX } from "react/jsx-runtime";

const meta: Meta<typeof Subtitle> = {
    component: Subtitle,
    title: "Atoms/Subtitle",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Subtitle>;

export const subtitle: Story = (args: JSX.IntrinsicAttributes) => (
    <Subtitle subtitle={'Test Subtitle'}  {...args}/>
);

subtitle.args = {
    // error: false
}

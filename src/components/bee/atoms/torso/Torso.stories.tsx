import { Meta, StoryObj } from "@storybook/react";
import Torso from "./Torso";
import { JSX } from "react/jsx-runtime";

const meta: Meta<typeof Torso> = {
    component: Torso,
    title: "Bee/Atoms/Torso",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Torso>;

export const torso: Story = (args: JSX.IntrinsicAttributes) => (
    <Torso data-testId="InputField-id"  {...args}/>
);

torso.args = {
    // error: false
}

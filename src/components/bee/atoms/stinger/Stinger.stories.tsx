import { Meta, StoryObj } from "@storybook/react";
import Stinger from "./Stinger";
import { JSX } from "react/jsx-runtime";

const meta: Meta<typeof Stinger> = {
    component: Stinger,
    title: "Bee/Atoms/Stinger",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Stinger>;

export const stinger: Story = (args: JSX.IntrinsicAttributes) => (
    <Stinger data-testId="InputField-id"  {...args}/>
);

stinger.args = {
    // error: false
}

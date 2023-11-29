import { Meta, StoryObj } from "@storybook/react";
import Bee from "./bee";
import { JSX } from "react/jsx-runtime";

const meta: Meta<typeof Bee> = {
    component: Bee,
    title: "Organisms/Bee",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Bee>;

export const bee: Story = (args: JSX.IntrinsicAttributes) => (
    <Bee data-testId="InputField-id"  {...args}/>
);

bee.args = {
    // error: false
}

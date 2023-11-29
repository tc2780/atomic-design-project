import { Meta, StoryObj } from "@storybook/react";
import Antenna from "./Antenna";
import { JSX } from "react/jsx-runtime";

const meta: Meta<typeof Antenna> = {
    component: Antenna,
    title: "Atoms/Antenna",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Antenna>;

export const antenna: Story = (args: JSX.IntrinsicAttributes) => (
    <Antenna data-testId="InputField-id"  {...args}/>
);

antenna.args = {
    // error: false
}

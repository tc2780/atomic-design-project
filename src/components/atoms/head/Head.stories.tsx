import { Meta, StoryObj } from "@storybook/react";
import Head from "./Head";
import { JSX } from "react/jsx-runtime";

const meta: Meta<typeof Head> = {
    component: Head,
    title: "Atoms/Head",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Head>;

export const head: Story = (args: JSX.IntrinsicAttributes) => (
    <Head data-testId="InputField-id"  {...args}/>
);

head.args = {
    // error: false
}

import { Meta, StoryObj } from "@storybook/react";
import SubmitField from "./submitField";
import { JSX } from "react/jsx-runtime";

const meta: Meta<typeof SubmitField> = {
    component: SubmitField,
    title: "Molecules/Submit Field",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof SubmitField>;

export const submitField: Story = (args: JSX.IntrinsicAttributes) => (
    <SubmitField data-testId="InputField-id"  {...args}/>
);

submitField.args = {
    // error: false
}

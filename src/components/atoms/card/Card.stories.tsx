import { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";
import { JSX } from "react/jsx-runtime";

const meta: Meta<typeof Card> = {
    component: Card,
    title: "Atoms/Card",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Card>;

export const card: Story = (args: JSX.IntrinsicAttributes) => (
    <Card data-testId="InputField-id"  {...args}/>
);

card.args = {
    // error: false
}

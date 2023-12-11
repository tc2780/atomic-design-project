import { Meta, StoryObj } from "@storybook/react";
import Title from "./Title";
import { JSX } from "react/jsx-runtime";

const meta: Meta<typeof Title> = {
    component: Title,
    title: "BlogPage/Atoms/Title",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Title>;

export const title: Story = (args: JSX.IntrinsicAttributes) => (
    <Title title={'Test Title'}  {...args}/>
);

title.args = {
    // error: false
}

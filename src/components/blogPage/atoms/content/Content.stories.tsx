import { Meta, StoryObj } from "@storybook/react";
import Content from "./Content";
import { JSX } from "react/jsx-runtime";

const meta: Meta<typeof Content> = {
    component: Content,
    title: "BlogPage/Atoms/Content",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Content>;

export const content: Story = (args: JSX.IntrinsicAttributes) => (
    <Content text={"alskdjfalkjfjajfioajfjakdfjajsdfklajf"}data-testId="InputField-id"  {...args}/>
);

content.args = {
    // error: false
}

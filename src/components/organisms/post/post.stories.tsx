import { Meta, StoryObj } from "@storybook/react";
import Post from "./post";
import { JSX } from "react/jsx-runtime";

const meta: Meta<typeof Post> = {
    component: Post,
    title: "Organisms/Post",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Post>;

export const post: Story = (args: JSX.IntrinsicAttributes) => (
    <Post header="testpost" content="sdfsdfs" data-testId="InputField-id"  {...args}/>
);

post.args = {
    // error: false
}

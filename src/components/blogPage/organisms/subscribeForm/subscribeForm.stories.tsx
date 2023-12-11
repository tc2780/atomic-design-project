import { Meta, StoryObj } from "@storybook/react";
import SubscribeForm from "./subscribeForm";
import { JSX } from "react/jsx-runtime";

const meta: Meta<typeof SubscribeForm> = {
    component: SubscribeForm,
    title: "BlogPage/Organisms/SubscribeForm",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof SubscribeForm>;

export const subscribeForm: Story = (args: JSX.IntrinsicAttributes) => (
    <SubscribeForm 
    subtitle="Subscribe test"
    text="subscribe to email newsletter"
    data-testId="InputField-id"  {...args}/>
);

subscribeForm.args = {
    // error: false
}

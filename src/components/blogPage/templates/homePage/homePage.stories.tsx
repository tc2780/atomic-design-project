import { Meta, StoryObj } from "@storybook/react";
import HomePage from "./homePage";
import { JSX } from "react/jsx-runtime";

const meta: Meta<typeof HomePage> = {
    component: HomePage,
    title: "BlogPage/Templates/HomePage",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof HomePage>;

export const homePage: Story = (args: JSX.IntrinsicAttributes) => (
    <HomePage 
    title={'Title'}
    postProps={[{
        header: 'post 1',
        content: 'cadsfasdfasdfasdf \naodfakdsjfkaljdsfkla\najdksfhakjdshfka'
    },
    {
        header: 'post 2',
        content: 'cadsfasdfasdfasdf \naodfakdsjfkaljdsfkla\najdksfhak\n\njdshfka'
    }]}
    subscribeFormProps={{
        subtitle: 'subscribe',
    }}
    data-testId="InputField-id"  
    {...args}/>
);

homePage.args = {
    // error: false
}

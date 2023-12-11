import { Meta, StoryObj } from "@storybook/react";
import HomePage from "../templates/homePage/homePage";
import { JSX } from "react/jsx-runtime";

const meta: Meta<typeof HomePage> = {
    component: HomePage,
    title: "BlogPage/Pages/HomePage",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof HomePage>;

export const homePage: Story = (args: JSX.IntrinsicAttributes) => (
    <HomePage 
    title={'The Atomic Design Project'}
    postProps={[{
        header: 'Atomic design and storybook!',
        content: 'Which is what this project is, and also this link that leads to a cool reading on it'
    },
    {
        header: 'Warning: this entire project is very unstyled',
        content: 'Pretty much the title. \n Most of the focus is on the functional parts of atomic design'
        + ' and an exploration into how the different parts work'
    }]}
    subscribeFormProps={{
        subtitle: 'subscribe',
        text: 'Feel free to input your email and click the button. Fair warning: '
        + 'there\'s no backend implemented so nothing actually happens'
    }}
    data-testId="InputField-id"  
    {...args}/>
);

homePage.args = {
    // error: false
}

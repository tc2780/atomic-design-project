import React from "react";
import styled from 'styled-components';
import SubscribeFormTemplate, { SubscribeFormProps } from "../../organisms/subscribeForm/subscribeForm";
import Post, {PostProps} from "../../organisms/post/post";
import Title from "../../atoms/title/Title";

interface props {
    title: string,
    postProps: PostProps[],
    subscribeFormProps: SubscribeFormProps,
    style?: React.CSSProperties
}

const StyledPage = styled.div`

`

const HomePage: React.FC<props> = ({title, postProps, subscribeFormProps, style}) => {
    return (
        <StyledPage style={style}>
            <Title title={title}/>
            {postProps.map(({header, content, style}) => (
                <Post header={header} content={content} style={style} />
            ))}
            <SubscribeFormTemplate subtitle={subscribeFormProps.subtitle} text={subscribeFormProps.text}/>
        </StyledPage>
    )
}

export default HomePage;


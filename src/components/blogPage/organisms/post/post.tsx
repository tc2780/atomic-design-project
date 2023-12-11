import React from "react";
import styled from 'styled-components';
import Subtitle from "../../atoms/subtitle/Subtitle";
import Content from "../../atoms/content/Content";
import Card from "../../atoms/card/Card";

export interface PostProps {
    header: string,
    content: string,
    style?: React.CSSProperties
}

const Post: React.FC<PostProps> = ({header, content, style}) => {
    return (
        <Card style={style}>
            <Subtitle subtitle={header} />
            <Content text={content} />
        </Card>
    )
}

export default Post;


import React from "react";
import styled from 'styled-components';
import { Typography } from 'antd';

interface props {
    title: string,
    style?: React.CSSProperties
}

const StyledTitle = styled(Typography.Title)`
    text-align: center;
`

const Title: React.FC<props> = ({title, style}) => {
    return (
        <StyledTitle style={style}>
            {title}
        </StyledTitle>
    )
}

export default Title;
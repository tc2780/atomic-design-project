import React from "react";
import styled from 'styled-components';
import { Typography } from 'antd';

interface props {
    text: string,
    style?: React.CSSProperties
}

const StyledContent = styled(Typography.Paragraph)`
    // max-width: 300px;
`

const Content: React.FC<props> = ({text, style}) => {
    return (
        <StyledContent style={style}>
            {text}
        </StyledContent>
    )
}

export default Content;


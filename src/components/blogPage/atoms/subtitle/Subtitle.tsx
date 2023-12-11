import React from "react";
import styled from 'styled-components';
import { Typography } from 'antd';

interface props {
    subtitle: string,
    style?: React.CSSProperties
}

const StyledSubtitle = styled(Typography.Title)`
`

const Subtitle: React.FC<props> = ({subtitle, style}) => {
    return (
        <StyledSubtitle level={2} style={style}>
            {subtitle}
        </StyledSubtitle>
    )
}

export default Subtitle;




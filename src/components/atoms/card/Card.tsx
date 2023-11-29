import React from "react";
import styled from 'styled-components';
import { Card as AntdCard} from 'antd';

interface props {
    style?: React.CSSProperties,
    children?: any,
}

const StyledCard = styled(AntdCard)`
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    margin: 5px;
`

const Card: React.FC<props> = ({style, children}) => {
    return (
        <StyledCard style={style}>
            {children}
        </StyledCard>
    )
}

export default Card;
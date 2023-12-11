import React from "react";
import styled from 'styled-components';

interface props {
    style?: React.CSSProperties
}

const StyledStinger = styled.div`
    width: 0;
    height: 0;
    border-bottom: 10px solid transparent;
    border-top: 10px solid transparent;
    border-left: 40px solid black;
`

const Stinger: React.FC<props> = ({style}) => {
    return (
        <StyledStinger style={style}/>
    )
}

export default Stinger;


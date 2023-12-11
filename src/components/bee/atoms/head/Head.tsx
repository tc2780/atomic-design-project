import React from "react";
import styled from 'styled-components';

interface props {
    style?: React.CSSProperties
}

const StyledHead = styled.div`
    width: 95px;
    height: 95px;
    background-color: rgb(255, 188, 0);
    border-radius: 50%;
`

const Head: React.FC<props> = ({style}) => {
    return (
        <StyledHead style={style}/>
    )
}

// Head.displayName = 'Head'
export default Head;


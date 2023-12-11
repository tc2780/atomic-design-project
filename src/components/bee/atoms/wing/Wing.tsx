import React, { ComponentProps, HTMLProps } from "react";
import styled from 'styled-components';

interface props {
    style?: React.CSSProperties
}

const StyledWing = styled.div`
    width: 80px;
    height: 55px;
    background-color: rgb(220, 250, 250);
    border-radius: 50px 50px 0 0;
    border: 1px solid rgb(190, 230, 240);

`

const Wing: React.FC<props> = ({style}) => {
    return (
        <StyledWing className="bee-wing" style={style} />
    )
}

export default Wing;


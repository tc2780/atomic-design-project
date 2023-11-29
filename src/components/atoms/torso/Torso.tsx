import React from "react";
import styled from 'styled-components';

interface props {
    style?: React.CSSProperties
}

const StyledTorso = styled.div`
    width: 130px;
    height: 120px;
    // background-color: rgb(255, 188, 0); 
   background: repeating-linear-gradient(
        90deg,
        rgb(255, 188, 0),
        rgb(255, 188, 0) 20px,
        black 20px,
        black 40px
      );
    border-radius: 50%;
    position: absolute;
    top: 20px;
    left: 20px;
    // border: 2px solid brown;
`

const Torso: React.FC<props> = ({style}) => {
    return (
        <StyledTorso style={style}/>
    )
}

export default Torso;


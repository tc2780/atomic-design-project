import React, { ComponentProps, HTMLProps } from "react";
import styled from 'styled-components';

interface props {
    style?: React.CSSProperties
}

const StyledAntenna = styled.div`
    position: absolute;
    height: 20px;
    width: 5px;
    background-color: black;
    top: 7px;
    left: -5px;
`

const Curve = styled.div`
    position: relative;
    width: 16px;
    height: 14px;
    border-top-left-radius: 20px;
    border-left: 5px solid black;
    border-top: 5px solid black;
    
    box-sizing: border-box;
`

const Antenna: React.FC<props> = ({style}) => {
    return (
        <div style={style}>
            <Curve >
                <StyledAntenna />
            </Curve>
        </div>
    )
}

export default Antenna;


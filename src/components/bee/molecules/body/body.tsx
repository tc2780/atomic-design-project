import React from "react";
import styled from 'styled-components';
import Wing from "../../atoms/wing/Wing";
import Head from "../../atoms/head/Head";
import Torso from "../../atoms/torso/Torso";
import Stinger from "../../atoms/stinger/Stinger";

interface props {
    style?: React.CSSProperties
}

const StyledBody = styled.div`
    // width: 80px;
    // height: 50px;
    // background-color: rgb(220, 250, 250);
    // border-radius: 50px 50px 0 0;
    // border: 1px solid rgb(190, 230, 240);
    // box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

    // .bee-wing {
    //     transform: rotate(45deg);
    //     transform-origin: center;
    // }

    position: relative;
    // display: inline-flex;
`

const Body: React.FC<props> = ({style}) => {
    return (
        <StyledBody style={style}>
            {/* <Stinger style={{position: 'absolute', left: '200px', top: '70px'}}/> */}
            <Torso style={{position: 'absolute', left: '80px'}}/>
            <Head style={{position: 'absolute', top: '20px'}}/>
            
        </StyledBody>
    )
}

export default Body;


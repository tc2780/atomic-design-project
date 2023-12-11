import React from "react";
import styled from 'styled-components';
import Wing from "../../atoms/wing/Wing";
import Head from "../../atoms/head/Head";
import Torso from "../../atoms/torso/Torso";
import Body from "../../molecules/body/body";
import Stinger from "../../atoms/stinger/Stinger";
import Antenna from "../../atoms/antenna/Antenna";

const StyledBee = styled.div`
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

const Bee: React.FC<{}> = () => {
    return (
        <StyledBee >
            <Stinger style={{position: 'absolute', left: '200px', top: '120px'}} />
            <Antenna 
            style={{
                position: 'absolute',
                transform: 'scaleX(-1) rotate(25deg)',
                transformOrigin: 'center',
                top: '50px',
                left: '10px'
            }}
            />
            <Wing 
            style={{
                position: 'absolute',
                left: '90px',
                top: '30px',
                transform: 'rotate(-20deg)',
                transformOrigin: 'center'
            }}/>
            <Body style={{top: '50px'}}/>
            <Wing 
            style={{
                position: 'absolute',
                left: '110px',
                top: '35px',
                transform: 'rotate(5deg)',
                transformOrigin: 'center'
            }}/>
            <Antenna 
            style={{
                position: 'absolute',
                transform: 'scaleX(-1) rotate(10deg)',
                transformOrigin: 'center',
                top: '45px',
                left: '20px'
            }}
            />
        </StyledBee>
    )
}

export default Bee;


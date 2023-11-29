import React from "react";
import styled from 'styled-components';
import Wing from "../../atoms/wing/Wing";

const StyledWings = styled.div`
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

`

const Wings: React.FC<{}> = () => {
    return (
        <StyledWings >
            <Wing 
            style={{
                transform:'rotate(-10deg)',
                transformOrigin: 'center',
                position: 'absolute'
            }}/>
            <Wing 
            style={{
                transform:'rotate(10deg)', 
                transformOrigin: 'center',
                position: 'absolute',
                left: '20px'
            }}/>

        </StyledWings>
    )
}

export default Wings;


import React from "react";
import styled from 'styled-components';
import Input from '../../atoms/input/Input';
import Button from '../../atoms/button/Button'

const StyledDiv = styled.div`
    justify-content: space-between;
    display: inline-flex;
`;

const SubmitField: React.FC<{}> = () => {
    return (
        <StyledDiv>
            <Input />
            <div style={{width: '10px'}} />
            <Button />
        </StyledDiv>
    )
}

// SubmitField.displayName = 'SubmitField'
export default SubmitField;


import React from "react";
import styled from 'styled-components';
import { Button as antdButton } from 'antd';

const StyledButton = styled(antdButton)`
    
`

const Button: React.FC<{}> = () => {
    return (
        <StyledButton type="primary">
            Submit
        </StyledButton>
    )
}

export default Button;


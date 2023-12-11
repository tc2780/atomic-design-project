import React from "react";
import styled from 'styled-components';
import { Input as AntdInput} from 'antd';

const StyledInput = styled(AntdInput)`
    max-width: 300px;
`

const Input: React.FC<{}> = () => {
    return (
        <StyledInput />
    )
}

export default Input;


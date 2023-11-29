import React from "react";
import styled from 'styled-components';
import Subtitle from "../../atoms/subtitle/Subtitle";
import Content from "../../atoms/content/Content";
import SubmitField from "../../molecules/submitField/submitField";
import Card from "../../atoms/card/Card";

export interface SubscribeFormProps {
    subtitle: string,
    text?: string,
}

const SubscribeForm: React.FC<SubscribeFormProps> = ({subtitle, text}) => {
    return (
        <Card >
            <Subtitle subtitle={subtitle} />
            {text && (
                <Content text={text} />
            )}
            <SubmitField />
        </Card>
    )
}

export default SubscribeForm;


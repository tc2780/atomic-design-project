import React from "react";
import styled from 'styled-components';
import Card from "../../atoms/card/Card";
import Subtitle from "../../atoms/subtitle/Subtitle";
import Content from "../../atoms/content/Content";
import SubmitField from "../../molecules/submitField/submitField";

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


import { CheckIcon, Cross1Icon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import styled from "styled-components";

import { Input } from "./Input";
import { ButtonStyled } from "../ButtonStyled";

const FormStyled = styled.form`
    display: flex;
    align-items: center;
    gap: 8px; /* Add space between elements */
    flex-wrap: wrap; /* Allow wrapping to prevent squishing */
`;

type FormProps = {
    initialValue: string;
    onSubmit: (value: string) => void;
    onCancel: () => void;
};

export const Form: React.FC<FormProps> = ({ initialValue, onSubmit, onCancel }) => {
    const [inputValue, setInputValue] = useState(initialValue);

    //F3: Handle input for a new todo item, validate the input and submit the new item
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim()) {
            onSubmit(inputValue);
        }
    };

    return (
        <FormStyled
            onSubmit={handleSubmit}
            onReset={onCancel}
        >
            <Input value={inputValue} onValueChange={(value) => setInputValue(value)} />
            <ButtonStyled type="submit" disabled={!inputValue.trim()}>
                <CheckIcon />
            </ButtonStyled>
            <ButtonStyled type="reset">
                <Cross1Icon />
            </ButtonStyled>
        </FormStyled>
    );
};
import { CheckIcon, Cross1Icon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import styled from "styled-components";

import { Input } from "./Input";
import { ButtonStyledPrimary, ButtonStyledConfirm, ButtonStyledCancel } from "../ButtonStyled";

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
            <ButtonStyledPrimary type="submit" disabled={!inputValue.trim()}>
                <CheckIcon />
            </ButtonStyledPrimary>
            <ButtonStyledPrimary type="reset">
                <Cross1Icon />
            </ButtonStyledPrimary>
        </FormStyled>
    );
};
import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    padding: 3px;
    border: 1px solid ${(props) => props.theme.colors.olive9};
    border-radius: 4px;
    width: 100%;
    max-width: 200px;
`;

type InputProps = {
    value: string;
    onValueChange: (value: string) => void;
};

export const Input: React.FC<InputProps> = ({ value, onValueChange }) => {
    return (
        <StyledInput
            type="text"
            value={value}
            onChange={(e) => onValueChange(e.target.value)}
            placeholder="Add new item"
        />
    );
};
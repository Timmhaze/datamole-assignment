import { CheckboxProps } from "@radix-ui/react-checkbox";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import React from "react";
import styled from "styled-components";

import { Checkbox } from "./Checkbox";

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
`;

const Label = styled.label`
    margin-left: 15px;
`;

export type LiteeItemProp = CheckboxProps & {
    label: string;
    handleEdit: () => void;
    handleRemoval: () => void;
};

export const ListItem = (props: LiteeItemProp) => {
    const { label, handleRemoval, handleEdit, ...checkboxProps } = props;

    return (
        <StyledDiv>
            <Checkbox {...checkboxProps} />
            <Label>{label}</Label>
            <button onClick={() => handleEdit()}>
                <TrashIcon />
            </button>
            <button onClick={() => handleRemoval()}>
                <Pencil1Icon />
            </button>
        </StyledDiv>
    );
};

import { PlusIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import styled from "styled-components";
import { Form } from "./form/Form";

const StyledDiv = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        flex-grow: 1;
    }

    button {
        all: unset;
        width: 25px;
        height: 25px;
        background-color: ${(props) => props.theme.colors.grass9};
        border: 1px solid;
        border-color: ${(props) => props.theme.colors.olive9};
        border-radius: 50%;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

type HeaderProps = {
    children: React.ReactNode;
    onItemAdd: (label: string) => void;
};

export const Header: React.FC<HeaderProps> = ({ children, onItemAdd }) => {
    const [showForm, setShowForm] = useState(false);

    return (
        <StyledDiv>
            <h1>{children}</h1>
            <button onClick={() => setShowForm(!showForm)}>
                <PlusIcon />
            </button>
            {showForm && (
                <Form
                    initialValue=""
                    onSubmit={(label) => {
                        onItemAdd(label);
                        setShowForm(false);
                    }}
                    onCancel={() => setShowForm(false)}
                />
            )}
        </StyledDiv>
    );
};
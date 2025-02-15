import { PlusIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import { Form } from "./form/Form";
import { StyledDiv, FormContainer } from "./HeaderStyled";

type HeaderProps = {
    children: React.ReactNode;
    onItemAdd: (label: string) => void;
};

export const Header: React.FC<HeaderProps> = ({ children, onItemAdd }) => {
    const [showForm, setShowForm] = useState(false);

    return (
        <StyledDiv>
            <div className="header-content">
                <h1>{children}</h1>
                {showForm ? (
                    <FormContainer>
                        <Form
                            initialValue=""
                            onSubmit={(label) => {
                                onItemAdd(label);
                                setShowForm(false);
                            }}
                            onCancel={() => setShowForm(false)}
                        />
                    </FormContainer>
                ) : (
                    <button onClick={() => setShowForm(true)}>
                        <PlusIcon />
                    </button>
                )}
            </div>
            <hr />
        </StyledDiv>
    );
};
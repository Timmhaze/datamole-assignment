import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./Button";

const ListItemStyled = styled.div`
    display: flex;
    align-items: center; /* Center align the content within each list item */
    justify-content: space-between; /* Space between the label and buttons */
    width: 100%;
    max-width: 600px; /* Limit the width of each list item */
    padding: 10px;
    border-bottom: 1px solid #ccc;
`;

const LabelStyled = styled.label`
    flex: 1; /* Take up remaining space */
    margin-left: 10px;
`;

const InputStyled = styled.input`
    flex: 1; /* Take up remaining space */
    margin-left: 10px;
    max-width: 300px; /* Set a maximum width for the input field */
    padding: 8px; /* Add padding for better appearance */
    border: 1px solid #ccc; /* Add border */
    border-radius: 4px; /* Add border radius */
    font-size: 16px; /* Set font size */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add subtle box shadow */
    transition: border-color 0.3s, box-shadow 0.3s; /* Add transition for focus state */

    &:focus {
        border-color: ${(props) => props.theme.colors.primary}; /* Change border color on focus */
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); /* Add box shadow on focus */
        outline: none; /* Remove default outline */
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 10px; /* Add space between buttons */
    margin-left: auto; /* Push the button group to the right */
`;

interface TodoItem {
    label: string;
    isDone: boolean;
    createdAt: number;
    id: number;
}

type ListItemProps = {
    item: TodoItem;
    onEditItem: (id: number, newLabel: string) => void;
    onToggleDone: (id: number) => void;
    onDeleteItem: (id: number) => void;
};

export const ListItem: React.FC<ListItemProps> = ({ item, onEditItem, onToggleDone, onDeleteItem }) => {
    const [editing, setEditing] = useState<boolean>(false);
    const [newLabel, setNewLabel] = useState<string>(item.label);

    const handleEditClick = () => {
        setEditing(true);
    };

    const handleSaveClick = () => {
        onEditItem(item.id, newLabel);
        setEditing(false);
    };

    const handleCancelClick = () => {
        setEditing(false);
        setNewLabel(item.label);
    };

    return (
        <ListItemStyled>
            <input
                type="checkbox"
                checked={item.isDone}
                onChange={() => onToggleDone(item.id)}
            />
            {editing ? (
                <>
                    <InputStyled
                        type="text"
                        value={newLabel}
                        onChange={(e) => setNewLabel(e.target.value)}
                    />
                    <ButtonGroup>
                        <Button onClick={handleSaveClick}>Save</Button>
                        <Button onClick={handleCancelClick}>Cancel</Button>
                    </ButtonGroup>
                </>
            ) : (
                <>
                    <LabelStyled>{item.label}</LabelStyled>
                    <ButtonGroup>
                        <Button onClick={handleEditClick}>Edit</Button>
                        <Button onClick={() => onDeleteItem(item.id)}>Delete</Button>
                    </ButtonGroup>
                </>
            )}
        </ListItemStyled>
    );
};
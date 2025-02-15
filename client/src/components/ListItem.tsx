import React, { useState } from "react";
import { ButtonStyledPrimary, ButtonStyledConfirm, ButtonStyledCancel } from "./ButtonStyled";
import { ListItemStyled, LabelStyled, InputStyled, ButtonGroup, ButtonGroupHover, ListItemStyledHover, CheckboxStyled } from "./ListItemStyled";

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
        <ListItemStyledHover>
            <CheckboxStyled
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
                        <ButtonStyledConfirm onClick={handleSaveClick}>Save</ButtonStyledConfirm>
                        <ButtonStyledCancel onClick={handleCancelClick}>Cancel</ButtonStyledCancel>
                    </ButtonGroup>
                </>
            ) : (
                <>
                    <LabelStyled>{item.label}</LabelStyled>
                    <ButtonGroupHover>
                        <ButtonStyledPrimary onClick={handleEditClick}>Edit</ButtonStyledPrimary>
                        <ButtonStyledCancel onClick={() => onDeleteItem(item.id)}>Delete</ButtonStyledCancel>
                    </ButtonGroupHover>
                </>
            )}
        </ListItemStyledHover>
    );
};
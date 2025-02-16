import React, { useState } from "react";
import { ButtonStyledGreen, ButtonStyledRed } from "./ButtonStyled";
import { LabelStyled, InputStyled, ButtonGroup, ButtonGroupHover, ListItemStyledHover, CheckboxStyled } from "./ListItemStyled";

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

    //F4: Handler for clicking on edit button
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
            {/*F4: If editing is true show the form and enable the Save and Cancel buttons*/}
            {editing ? (
                <>
                    {/*F4: Input field for the new label when editing an item*/} 
                    <InputStyled
                        type="text"
                        value={newLabel}
                        onChange={(e) => setNewLabel(e.target.value)}
                    />
                    <ButtonGroup>
                        <ButtonStyledGreen onClick={handleSaveClick}>Save</ButtonStyledGreen>
                        <ButtonStyledRed onClick={handleCancelClick}>Cancel</ButtonStyledRed>
                    </ButtonGroup>
                </>
            ) : (
                <>
                    <LabelStyled>{item.label}</LabelStyled>
                    <ButtonGroupHover>
                        <ButtonStyledGreen onClick={handleEditClick}>Edit</ButtonStyledGreen>
                        <ButtonStyledRed onClick={() => onDeleteItem(item.id)}>Delete</ButtonStyledRed>
                    </ButtonGroupHover>
                </>
            )}
        </ListItemStyledHover>
    );
};
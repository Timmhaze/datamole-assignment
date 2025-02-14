import React, { useState } from "react";
import styled from "styled-components";

const ListStyled = styled.div`
    display: flex;
    flex-direction: column;
`;

interface TodoItem {
    label: string;
    isDone: boolean;
    createdAt: number;
    id: number;
}

type ListProps = {
    items: TodoItem[];
    onEditItem: (id: number, newLabel: string) => void;
    onToggleDone: (id: number) => void;
    onDeleteItem: (id: number) => void;
};

export const List: React.FC<ListProps> = ({ items, onEditItem, onToggleDone, onDeleteItem }) => {
    const [editingItemId, setEditingItemId] = useState<number | null>(null);
    const [newLabel, setNewLabel] = useState<string>("");

    const handleEditClick = (item: TodoItem) => {
        setEditingItemId(item.id);
        setNewLabel(item.label || ""); // Ensure newLabel is always a string
    };

    const handleSaveClick = (id: number) => {
        onEditItem(id, newLabel);
        setEditingItemId(null);
    };

    return (
        <ListStyled>
            {items.map((item) => (
                <div key={item.id}>
                    <input
                        type="checkbox"
                        checked={item.isDone}
                        onChange={() => onToggleDone(item.id)}
                    />
                    {editingItemId === item.id ? (
                        <>
                            <input
                                type="text"
                                value={newLabel}
                                onChange={(e) => setNewLabel(e.target.value)}
                            />
                            <button onClick={() => handleSaveClick(item.id)}>Save</button>
                            <button onClick={() => setEditingItemId(null)}>Cancel</button>
                        </>
                    ) : (
                        <>
                            <label>{item.label}</label>
                            <button onClick={() => handleEditClick(item)}>Edit</button>
                            <button onClick={() => onDeleteItem(item.id)}>Delete</button>
                        </>
                    )}
                </div>
            ))}
        </ListStyled>
    );
};
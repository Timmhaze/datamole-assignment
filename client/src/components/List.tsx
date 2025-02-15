import React from "react";
import styled from "styled-components";
import { ListItem } from "./ListItem";

const ListStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; /* Center align the list items */
    width: 100%;
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
    // Sort items: "todo" items first, then by creation date descending
    const sortedItems = [...items].sort((a, b) => {
        return a.isDone ? 1 : -1;
    });

    return (
        <ListStyled>
            {sortedItems.map((item) => (
                <ListItem
                    key={item.id}
                    item={item}
                    onEditItem={onEditItem}
                    onToggleDone={onToggleDone}
                    onDeleteItem={onDeleteItem}
                />
            ))}
        </ListStyled>
    );
};
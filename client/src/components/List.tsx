import React from "react";
import styled from "styled-components";
import { ListItem } from "./ListItem";

const ListStyled = styled.div`
    display: flex;
    flex-direction: column;
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
    //F7: Sort items by isDone property, then is passed as props to ListItem component in that order
    const sortedItems = [...items].sort((a) => {
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
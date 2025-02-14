import React from "react";
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
};

export const List: React.FC<ListProps> = ({ items }) => {
    return (
        <ListStyled>
            {items.map((item) => (
                <div key={item.id}>
                    <h3>{item.label}</h3>
                    
                    <input
                        type="checkbox"
                        checked={item.isDone}
                        readOnly
                    />
                    <hr />
                </div>
            ))}
        </ListStyled>
    );
};
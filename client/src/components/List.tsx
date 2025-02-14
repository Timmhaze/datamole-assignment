import React, {useEffect, useState} from "react";
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

export const List = () => {
    
    const [items, setItems] = useState<TodoItem[]>([]);

    useEffect(() => {
        fetch("http://localhost:3000/items") // URL for data
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response broke");
            }
            return response.json();
          })
          .then((data) => {
            console.log("data objects:", data); 
            setItems(data);
          })
          .catch((error) => {
            console.error("There was a problem with getting the data:", error);
          });
      }, []);

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
                    <hr /> {/* <----- Just for readability*/}
                </div>
            ))}
        </ListStyled>
    );
};

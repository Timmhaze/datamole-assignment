import React, { useState, useEffect } from "react";
import { Container } from "./components/Container";
import { Layout, Content, FooterWrapper } from "./components/Layout";
import { List } from "./components/List";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/providers/ThemeProvider";

// Todo item structure
interface TodoItem {
    label: string;
    isDone: boolean;
    createdAt: number;
    id: number;
}

export const App = () => {
    //State for todo items
    const [items, setItems] = useState<TodoItem[]>([]);

    //F2: Fetch items from server when component mounts, passed as props to List/ListItem component
    useEffect(() => { 
        fetch("http://localhost:3000/items")
            .then((response) => {
                if (!response.ok) throw new Error("Network error");
                return response.json();
            })
            .then((data) => {
                console.log("Fetched data:", data);
                setItems(data);
            })
            .catch((error) => {
                console.error("Fetch error:", error);
            });
    }, []);

    //F3: Logic for adding a todo item
    const handleAddItem = (label: string) => {
        const newItem: TodoItem = {
            label,
            isDone: false,
            createdAt: Date.now(),
            id: items.length ? items[items.length - 1].id + 1 : 1
        };

        //Save new item to server
        fetch("http://localhost:3000/items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newItem),
        })
            .then((response) => {
                if (!response.ok) throw new Error("Network error");
                return response.json();
            })
            .then((data) => {
                setItems((prevItems) => [...prevItems, data]);
            })
            .catch((error) => {
                console.error("Fetch error:", error);
            });
    };

    //F4: Logic for editing a todo item | pass current ID and new label to the server, parse into an array, find the item with a matching ID and update the label
    const handleEditItem = (id: number, newLabel: string) => {
        const updatedItems = items.map((item) =>
            item.id === id ? { ...item, label: newLabel } : item
        );

        const updatedItem = updatedItems.find(item => item.id === id);

        //Save updated item to server
        fetch(`http://localhost:3000/items/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ label: newLabel, isDone: updatedItem?.isDone, createdAt: updatedItem?.createdAt }),
        })
            .then((response) => {
                if (!response.ok) throw new Error("Network error");
                return response.json();
            })
            .then(() => {
                setItems(updatedItems);
            })
            .catch((error) => {
                console.error("Fetch error:", error);
            });
    };

    //F5: Logic for toggling a todo item's done status | pass the current ID to the server, parse into an array, find the item with a matching ID and update the isDone status
    const handleToggleDone = (id: number) => {
        const updatedItems = items.map((item) =>
            item.id === id ? { ...item, isDone: !item.isDone } : item
        );

        const updatedItem = updatedItems.find(item => item.id === id);

        //Save updated item to Server
        fetch(`http://localhost:3000/items/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ label: updatedItem?.label, isDone: updatedItem?.isDone, createdAt: updatedItem?.createdAt }),
        })
            .then((response) => {
                if (!response.ok) throw new Error("Network error");
                return response.json();
            })
            .then(() => {
                setItems(updatedItems);
            })
            .catch((error) => {
                console.error("Fetch error:", error);
            });
    };

    //F6: Item clicked to delete | pass the current ID to the server and delete item with matching ID
    const handleDeleteItem = (id: number) => {
        fetch(`http://localhost:3000/items/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (!response.ok) throw new Error("Network error");
                return response.json();
            })
            .then(() => {
                setItems((prevItems) => prevItems.filter(item => item.id !== id));
            })
            .catch((error) => {
                console.error("Fetch error:", error);
            });
    };

    //F8: Count todo and done items for the footer component
    const todoCount = items.filter(item => !item.isDone).length;
    const doneCount = items.filter(item => item.isDone).length;

    return (
        <ThemeProvider>
            <Container>
                <Layout>
                    <Header onItemAdd={handleAddItem}>To Do App</Header>
                    <Content>
                        <List items={items} onEditItem={handleEditItem} onToggleDone={handleToggleDone} onDeleteItem={handleDeleteItem} />
                    </Content>
                    <FooterWrapper> {/*B2: Placed FooterWrapper here to ensure it is always at the bottom of the entire layout*/}
                        <Footer todoItems={todoCount} doneItems={doneCount} />
                    </FooterWrapper>
                </Layout>
            </Container>
        </ThemeProvider>
    );
};
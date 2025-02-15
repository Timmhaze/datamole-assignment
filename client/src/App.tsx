import React, { useState, useEffect } from "react";
import { Container } from "./components/Container";
import { Layout, Content, FooterWrapper } from "./components/Layout";
import { List } from "./components/List";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/providers/ThemeProvider";

interface TodoItem {
    label: string;
    isDone: boolean;
    createdAt: number;
    id: number;
}

export const App = () => {
    const [items, setItems] = useState<TodoItem[]>([]);

    useEffect(() => {
        fetch("http://localhost:3000/items")  // URL for data
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Fetched data:", data);
                setItems(data);
            })
            .catch((error) => {
                console.error("There was a problem with the fetch operation:", error);
            });
    }, []);

    const handleAddItem = (label: string) => {
        const newItem: TodoItem = {
            label,
            isDone: false,
            createdAt: Date.now(),
            id: items.length ? items[items.length - 1].id + 1 : 1,
        };

        // Persist the new item on the server
        fetch("http://localhost:3000/items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newItem),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setItems((prevItems) => [...prevItems, data]);
            })
            .catch((error) => {
                console.error("There was a problem with the fetch operation:", error);
            });
    };

    const handleEditItem = (id: number, newLabel: string) => {
        const updatedItems = items.map((item) =>
            item.id === id ? { ...item, label: newLabel } : item
        );

        const updatedItem = updatedItems.find(item => item.id === id);

        // Persist the updated item on the server
        fetch(`http://localhost:3000/items/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ label: newLabel, isDone: updatedItem?.isDone, createdAt: updatedItem?.createdAt }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(() => {
                setItems(updatedItems);
            })
            .catch((error) => {
                console.error("There was a problem with the fetch operation:", error);
            });
    };

    const handleToggleDone = (id: number) => {
        const updatedItems = items.map((item) =>
            item.id === id ? { ...item, isDone: !item.isDone } : item
        );

        const updatedItem = updatedItems.find(item => item.id === id);

        // Persist the updated item on the server
        fetch(`http://localhost:3000/items/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ label: updatedItem?.label, isDone: updatedItem?.isDone, createdAt: updatedItem?.createdAt }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(() => {
                setItems(updatedItems);
            })
            .catch((error) => {
                console.error("There was a problem with the fetch operation:", error);
            });
    };

    const handleDeleteItem = (id: number) => {
        // Persist the deletion on the server
        fetch(`http://localhost:3000/items/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(() => {
                setItems((prevItems) => prevItems.filter(item => item.id !== id));
            })
            .catch((error) => {
                console.error("There was a problem with the fetch operation:", error);
            });
    };

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
                    <FooterWrapper>
                        <Footer todoItems={todoCount} doneItems={doneCount} />
                    </FooterWrapper>
                </Layout>
            </Container>
        </ThemeProvider>
    );
};
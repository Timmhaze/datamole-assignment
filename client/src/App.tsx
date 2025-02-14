import React, { useState, useEffect } from "react";
import { Container } from "./components/Container";
import { Layout } from "./components/Layout";
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
        fetch("http://localhost:3000/items")  
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

    return (
        <ThemeProvider>
            <Container>
                <Layout>
                    <Header onItemAdd={handleAddItem}>To Do app</Header>
                    <List items={items} />
                    <Footer />
                </Layout>
            </Container>
        </ThemeProvider>
    );
};
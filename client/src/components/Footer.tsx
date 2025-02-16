import React from "react";
import styled from "styled-components";

const FooterStyled = styled.footer`
    display: flex;
    margin-top: 15px;
    padding-top: 15px;
    font-family: Roboto, sans-serif;
    border-top: 1px solid;
    border-color: ${(props) => props.theme.colors.olive6};
`;

type FooterProps = {
    todoItems?: number;
    doneItems?: number;
};

export const Footer = (props: FooterProps) => {
    const { todoItems = 0, doneItems = 0 } = props; //F1: Assign default value for todoItems and doneItems should they not already have values from props.

    return (
        <FooterStyled>
            Tasks to-do: {todoItems} | Tasks done: {doneItems}
        </FooterStyled>
    );
};
import React from "react";
import styled from "styled-components";

const FooterStyled = styled.footer`
    display: flex;

    margin-top: 15px;
    padding-top: 15px;

    border-top: 1px solid;
    border-color: ${(props) => props.theme.colors.olive6};
`;

type FooterProps = {
    todoItems?: number;
    doneItems?: number;
};

export const Footer = (props: FooterProps) => {
    const { todoItems = 0, doneItems = 0 } = props; // Default value assignment. If todoItems is not provided, it will default to 0. Same goes for doneItems.

    return (
        <FooterStyled>
            Todo: {todoItems} | Done: {doneItems}
        </FooterStyled>
    );
};
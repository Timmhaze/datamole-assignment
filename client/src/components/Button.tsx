import React from "react";
import { ButtonStyled } from "./ButtonStyled";

type ButtonProps = {
    onClick: () => void;
    children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
    return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
};
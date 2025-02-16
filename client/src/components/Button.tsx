import React from "react";
import { ButtonStyled } from "./ButtonStyled";

//F9: Custom Button component, styled in ButtonStyled.tsx (different buttons have different styles so the naming convention for the styled components is 
// ButtonStyled, ButtonStyledGreen, ButtonStyledRed, with ButtonStlyed being the default blue button style)

type ButtonProps = {
    onClick: () => void;
    children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
    return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
};
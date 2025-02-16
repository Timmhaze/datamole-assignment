import styled from "styled-components";

/*Default Blue Variant*/
export const ButtonStyled = styled.button`
    background-color: DodgerBlue;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    border-radius: 5px;
    margin: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /*Add subtle shadow to the button*/
    transition: background-color 0.3s, box-shadow 0.3s; /*Smooth transition for background and shadow changes*/

    &:hover {
        background-color: ${(props) => props.theme.colors.primaryDark}; /*Change background color on hover*/
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /*Increase shadow on hover*/
    }

    &:focus {
        outline: none; /*Remove default outline*/
        box-shadow: 0 0 0 3px ${(props) => props.theme.colors.primaryLight}; /*Add focus ring*/
    }

    &:active {
        background-color: ${(props) => props.theme.colors.primaryDarker}; /*Change background color when active*/
    }
`;

/*Green Variant*/
export const ButtonStyledGreen = styled.button`
    font-family: Roboto, sans-serif;
    background-color: ForestGreen;
    color: white;
    border: none;
    padding: 7px 12px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    border-radius: 5px;
    margin: 1px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /*Add subtle shadow to the button*/
    transition: background-color 0.3s, box-shadow 0.3s; /*Smooth transition for background and shadow changes*/

    &:hover {
        background-color: ${(props) => props.theme.colors.primaryDark}; /*Change background color on hover*/
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /*Increase shadow on hover*/
    }

    &:focus {
        outline: none; /*Remove default outline*/
        box-shadow: 0 0 0 3px ${(props) => props.theme.colors.primaryLight}; /*Add focus ring*/
    }

    &:active {
        background-color: ${(props) => props.theme.colors.primaryDarker}; /*Change background color when active*/
    }
`;

/*Red Variant*/
export const ButtonStyledRed = styled.button`
    font-family: Roboto, sans-serif;
    background-color: FireBrick;
    color: white;
    border: none;
    padding: 7px 12px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    border-radius: 5px;
    margin-right: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /*Add subtle shadow to the button*/
    transition: background-color 0.3s, box-shadow 0.3s; /*Smooth transition for background and shadow changes*/

    &:hover {
        background-color: ${(props) => props.theme.colors.primaryDark}; /*Change background color on hover*/
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /*Increase shadow on hover*/
    }

    &:focus {
        outline: none; /*Remove default outline*/
        box-shadow: 0 0 0 3px ${(props) => props.theme.colors.primaryLight}; /*Add focus ring*/
    }

    &:active {
        background-color: ${(props) => props.theme.colors.primaryDarker}; /*Change background color when active*/
    }
`;
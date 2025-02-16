import styled from "styled-components";

export const ListItemStyled = styled.div`
    display: flex;
    align-items: center; /* Center align the content within each list item */
    width: 100%;
    max-width: 600px; /* Limit the width of each list item */
    padding: 15px; 
    position: relative; /*Allow absolute positioning of child elements*/
    font-family: Roboto, sans-serif; /*Set the font family for text within the list item*/
`;

export const LabelStyled = styled.label`
    margin-left: 10px; 
`;

export const InputStyled = styled.input`
    flex: 1; /* Take up remaining space */
    margin-left: 5px;
    max-width: 300px; /* Set a maximum width for the input field */
    padding: 8px; /* Add padding for better appearance */
    border: 1px solid #ccc; /* Add border */
    border-radius: 4px; /* Add border radius */
    font-size: 16px; /* Set font size */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);  /* Add subtle box shadow */
    transition: border-color 0.3s, box-shadow 0.3s;  /* Add transition for focus state */

    &:focus {
        border-color: ${(props) => props.theme.colors.primary}; /* Change border color on focus */
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); /* Add box shadow on focus */
        outline: none; /* Remove default outline */
    }
`;

export const CheckboxStyled = styled.input.attrs({ type: 'checkbox' })`
    appearance: none; /*Remove the default checkbox styling*/
    width: 20px;
    height: 20px;
    border: 2px solid #ccc;
    border-radius: 4px;
    position: relative; /*For positioning the checkmark*/
    cursor: pointer;
    outline: none;
    transition: background-color 0.3s, border-color 0.3s;

    &:checked {
        background-color: green;
        border-color: green;
    }

    &:checked::after {
        content: '';
        position: absolute; /*Position the checkmark absolutely within the checkbox*/
        top: calc(50% - 1px); /*Center the checkmark vertically within the checkbox*/
        left: 50%; /*Center the checkmark horizontally within the checkbox*/
        width: 5px;
        height: 10px;
        border: solid white; /*Set the color of the checkmark to white*/
        border-width: 0 2px 2px 0; /*Set the thickness of the checkmark*/
        transform: translate(-50%, -50%) rotate(45deg); /*Center and rotate the checkmark*/
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 5px; /* Add space between buttons */
    margin-left: 10px; /*Separate from the input field*/
`;

export const ButtonGroupHover = styled(ButtonGroup)`
    opacity: 0; /*Initially hide the button group*/
    transition: opacity 0.3s; /*Smooth transition for visibility changes*/
    position: absolute; /*Position the button group absolutely within the list item*/
    right: 10px; /*Align the button group to the right edge of the list item with some padding*/
`;

export const ListItemStyledHover = styled(ListItemStyled)`
    &:hover ${ButtonGroupHover} {
        opacity: 1; /*Show the button group when the list item is hovered over*/
    }
`;
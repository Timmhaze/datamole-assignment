import styled from "styled-components";

export const ListItemStyled = styled.div`
    display: flex;
    align-items: center; /* Center align the content within each list item */
    width: 100%;
    max-width: 600px; /* Limit the width of each list item */
    padding: 10px;
    position: relative; /* Position relative for absolute positioning of buttons */
`;

export const LabelStyled = styled.label`
    flex: 1; /* Take up remaining space */
    margin-left: 10px;
`;

export const InputStyled = styled.input`
    flex: 1; /* Take up remaining space */
    margin-left: 5px; /* Reduce margin to move closer to the checkbox */
    max-width: 300px; /* Set a maximum width for the input field */
    padding: 8px; /* Add padding for better appearance */
    border: 1px solid #ccc; /* Add border */
    border-radius: 4px; /* Add border radius */
    font-size: 16px; /* Set font size */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add subtle box shadow */
    transition: border-color 0.3s, box-shadow 0.3s; /* Add transition for focus state */

    &:focus {
        border-color: ${(props) => props.theme.colors.primary}; /* Change border color on focus */
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); /* Add box shadow on focus */
        outline: none; /* Remove default outline */
    }
`;

export const CheckboxStyled = styled.input.attrs({ type: 'checkbox' })`
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid #ccc;
    border-radius: 4px;
    position: relative;
    cursor: pointer;
    outline: none;
    transition: background-color 0.3s, border-color 0.3s;

    &:checked {
        background-color: green;
        border-color: green;
    }

    &:checked::after {
        content: '';
        position: absolute;
        top: calc(50% - 1px);
        left: 50%;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: translate(-50%, -50%) rotate(45deg);
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 5px; /* Decrease space between buttons */
    margin-left: 10px; /* Add margin to separate from the input field */
`;

export const ButtonGroupHover = styled(ButtonGroup)`
    opacity: 0; /* Initially hidden */
    transition: opacity 0.3s; /* Smooth transition for visibility */
    position: absolute; /* Position absolute to align with the right edge */
    right: 10px; /* Align to the right edge with some padding */
`;

export const ListItemStyledHover = styled(ListItemStyled)`
    &:hover ${ButtonGroupHover} {
        opacity: 1; /* Show buttons on hover */
    }
`;
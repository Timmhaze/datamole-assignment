import styled from "styled-components";

export const ButtonStyledPrimary = styled.button`
    background-color: DodgerBlue;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    border-radius: 5px;
    margin: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s, box-shadow 0.3s;

    &:hover {
        background-color: ${(props) => props.theme.colors.primaryDark};
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px ${(props) => props.theme.colors.primaryLight};
    }

    &:active {
        background-color: ${(props) => props.theme.colors.primaryDarker};
    }
`;

export const ButtonStyledConfirm = styled.button`
    background-color: ForestGreen;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    border-radius: 5px;
    margin: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s, box-shadow 0.3s;

    &:hover {
        background-color: ${(props) => props.theme.colors.primaryDark};
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px ${(props) => props.theme.colors.primaryLight};
    }

    &:active {
        background-color: ${(props) => props.theme.colors.primaryDarker};
    }
`;

export const ButtonStyledCancel = styled.button`
    background-color: FireBrick;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    border-radius: 5px;
    margin: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s, box-shadow 0.3s;

    &:hover {
        background-color: ${(props) => props.theme.colors.primaryDark};
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px ${(props) => props.theme.colors.primaryLight};
    }

    &:active {
        background-color: ${(props) => props.theme.colors.primaryDarker};
    }
`;
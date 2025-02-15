import styled from "styled-components";

export const StyledDiv = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    h1 {
        flex-grow: 1;
        font-family: Roboto, sans-serif;
        font-size: 18px;
    }

    .header-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    button {
        all: unset;
        width: 25px;
        height: 25px;
        background-color: ${(props) => props.theme.colors.grass9};
        border: 1px solid;
        border-color: ${(props) => props.theme.colors.olive9};
        border-radius: 50%;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 10px; /* Add margin to separate from the input field */
    }

    hr {
        width: 100%;
        border: none;
        border-top: 1px solid #d7dad7;
        margin: 10px 0;
    }
`;

export const FormContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px; /* Add space between elements */
`;
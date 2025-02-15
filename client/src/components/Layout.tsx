import styled from "styled-components";

export const Layout = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: flex-start; /* Align items to the top */
    align-items: stretch; /* Ensure children take full width */

    width: 100%;
    max-width: 600px;
    margin: 0 30px;
    padding: 20px;

    background-color: rgb(255, 255, 255);
    border: 1px solid;
    border-color: ${(props) => props.theme.colors.olive6};
    border-radius: 5px;
`;

export const Content = styled.div`
    flex-grow: 1; /* Allow the content area to grow and fill the available space */
    display: flex;
    flex-direction: column;
    justify-content: flex-start; /* Align items to the top */
`;

export const FooterWrapper = styled.div`
    margin-top: auto; /* Push the footer to the bottom */
`;
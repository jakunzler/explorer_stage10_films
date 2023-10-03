import styled from "styled-components";

export const Container = styled.div`
    width: 100%;	
    height: 100vh;

    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 105px auto;
    grid-template-areas:
    "header"
    "content";
`;

export const Content = styled.div`
    position: relative;
    grid-area: content;
    padding: 0 7vw;

    display: flex;
    flex-direction: column;
    overflow: hidden;

    > div {
        position: absolute;
        top: 0;
        right: 7vw;
 
        width: 15vw;
    }

    > section button div {
        display: flex;
        gap: 6px;
    }
`;
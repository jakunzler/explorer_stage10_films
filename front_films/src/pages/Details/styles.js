import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
        grid-area: content;
        overflow: scroll;

        ::-webkit-scrollbar {
            width: 10px;
        }

        ::-webkit-scrollbar-track {
            background: none;
        }

        ::-webkit-scrollbar-thumb {
            background: ${({ theme }) => theme.COLORS.ORANGE};
            border-radius: 8px;
        }
    }

`;

export const Links = styled.ul`
    list-style: none;

    > li {
        margin-top: 12px;

        a {
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`;

export const Content = styled.div`
    margin: 0 7vw;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;


    > header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin: 4rem 0 3.6rem;

        > a div {
            font-size: 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;

            color: ${({ theme }) => theme.COLORS.ORANGE };
        }
    }

    > section {
        height: auto;
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    > section div:nth-child(1) {
        display: flex;
        gap: 1rem;

        > img {
            width: 20px;
            height: 20px;
        }
    }

    > section div:nth-child(2) {
        margin: 0;
        height: auto;
    }

    > button:first-child {
        align-self: end;
    }

    > h1 {
        font-size: 36px;
        font-weight: 500;
        padding-top: 64px;
    }

    .author {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 2rem;
    }

    p {
        font-size: 16px;
        margin-top: 4rem;
        text-align: justify;
    }

    p + p {
        margin-top: 1rem;
    }
`;

export const Avatar = styled.div`
    display: flex;
    align-items: center;

    > img {
        width: 16px;
        height: 16px;
        border-radius: 50%;

        margin-left: 0;
    }
`;

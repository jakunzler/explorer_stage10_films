import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
        grid-area: content;
    }

`;

export const Form = styled.form`
    height: calc(100vh - 205px);
    margin: 38px 7vw;

    > header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-bottom: 36px;

        > a div {
            font-size: 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;

            color: ${({ theme }) => theme.COLORS.ORANGE };
        }
    }

    > section div .input {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 4rem;

        margin-bottom: 4rem;
        width: 99%;
    }

    > section .markers, .links {
        display: flex;
        flex-direction: column;
        width: 99%;
    }
    
    > section .markers h2, .links h2 {
        color: #999591;
        font-size: 26px;
        font-weight: 400;
        margin: 4rem 0 2.4rem;
    }

    > section .markers .tags, .links .link {
        background-color: #0D0C0F;
        display: flex;
        align-items: center;
    }

    > section .markers .tags div, .links .link div {
        width: auto;
    }

    > section div .button {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 4rem;

        width: 99%;
    }
    
    > section div .button .delete {
        background: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK };
        color: ${({ theme }) => theme.COLORS.ORANGE };
    }

    > section textarea {
        width: 100%;
        height: 27.4rem;

        width: 99%;
    }
`;
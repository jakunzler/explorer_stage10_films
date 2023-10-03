import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.header`
    grid-area: header;

    height: 105px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 7vw;
`;

export const Brand = styled(Link)`
    grid-area: brand;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    > h1 {
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }

`;

export const Profile = styled.div`
    display: flex;
    align-items: center;

    > div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-evenly;
        margin-left: 16px;
        line-height: 24px;

        span {
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

        strong {
            font-size: 18px;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`;

export const Avatar = styled(Link)`
    display: flex;
    align-items: center;

    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;

        margin-left: 16px;
    }
`;

export const Search = styled.div`
    grid-area: search;

    width: 60%;
    padding: 0 64px;
`;

export const Logout = styled.div`
    border: none;
    background: none;
    cursor: pointer;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

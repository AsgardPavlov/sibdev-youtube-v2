import React from 'react';
import styled from 'styled-components'
import FavouriteList from './Fav/FavouriteList';

export default function Favourites(){
    return (
        <>
        <Wrapper>
            <h1>Избранное</h1>
            <FavouriteList/>
        </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    box-sizing: border-box;
    width: 100%;
    position: absolute;
    top: 80px;
    padding: 40px 200px 0px 200px;
    h1{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 28px;
        line-height: 40px;
        display: flex;
        align-items: center;
        color: #000000;
        margin-bottom: 40px;
    }
`
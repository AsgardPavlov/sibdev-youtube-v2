import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";

export default function Favourite({fav}){
    const LOCAL_STORAGE_KEY = "SIBDEV_ACCEPT_MY_OFFER";
    let array = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))

    const removeItem = (id) => {
        array = array.filter(el => el.id !== fav.id)
        localStorage.clear()
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(array))
        window.location.reload()
    }

    return(
        <>
        <Wrapper>
            <Link to={{pathname: "/", search: "q=" + fav.searchTerm /* + "&MaxResult=" + fav.result*/ }} >
                <h3>{fav.name}</h3>
            </Link>
            <div className="button-warapper">
                <p style={{marginRight: 30, color: '#1390E5'}}>Изменить</p>
                <p onClick={removeItem} style={{color: '#FF0000'}}>Удалить</p>
            </div>
        </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    :hover{
        background: #F1F1F1;
        background-blend-mode: multiply;
        p{
            display: block;
            cursor: pointer;
        }
    a:hover{
        border:none;
    }
    }
    .button-warapper{
        display: flex;
        justify-content: space-between;
        padding-left: 30px;
    }
    .button-warapper:hover{
        display: flex;
        justify-content: space-between;
    }
    display: flex;
    box-sizing: border-box;
    padding: 13px 20px 14px 20px;
    width: 100%;
    justify-content: space-between;
    height: 47px;
    background: #fff;
    margin-bottom: 2px;
    p{
        display: none;
    }
    h3{
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        display: flex;
        color: #000000;
        width: 749px;
    }
    button{
        box-sizing: border-box;
    }
    Link:hover{
        border: none;
    }
`
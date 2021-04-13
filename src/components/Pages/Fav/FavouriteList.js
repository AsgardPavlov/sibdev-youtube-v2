import React from 'react'
import styled from 'styled-components'
import Favourite from './Favourite'

function FavouriteList(){

    const LOCAL_STORAGE_KEY = "SIBDEV_ACCEPT_MY_OFFER";
    const storageFavs = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    return(
        <>
            {storageFavs.map(fav => (
                <Wrapper key={fav.id}>
                    <Favourite
                    key={fav.id}
                    fav={fav}
                    />
                </Wrapper>
            ))}
        </>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: auto;
`

export default FavouriteList;
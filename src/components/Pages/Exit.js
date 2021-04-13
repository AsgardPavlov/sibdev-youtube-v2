import React from 'react';

export default function Exit(){
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'auto'}}>
            <button onClick={(e) => {localStorage.clear()}} >ВЫЙТИ</button>
            <button onClick={(e) => {window.location.reload()}} >Submite</button>
        </div>
    );
};

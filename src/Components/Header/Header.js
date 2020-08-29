import React from 'react';
import Search from './Search'



function Header(){
    return (
        <header className="header">
            <h1 className="header__title">Витрина</h1>
            <Search />
        </header>
    )
}

export default Header;
import React from 'react';

import './Header.scss';

//Forma diferente de escrever uma função anonima.  semelhante   var Header = function(){};
const Header = props => {

    const{ handleSearch } = props

    return (
        <header className="header">
            <input type="search" className="inputSearch" placeholder="Buscar pais..." onChange={handleSearch}></input>
        </header>
    )
}

export default Header;
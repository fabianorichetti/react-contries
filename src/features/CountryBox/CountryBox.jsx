import React from 'react';
import CountryList from '../CountryList/CountryList';
import './CountryBox.scss';

const CountyBox = props => {

    const{
        country
    } = props

    return(
        <div className="countryBox">
            <div className="imageContainer">
                <img src={country.flag} alt="" className="image" />
            </div>
            <div className="title">
                {country.name}
            </div>
        </div>
    )
}

export default CountyBox;
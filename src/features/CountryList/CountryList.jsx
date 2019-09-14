import React from 'react';

import CountryBox from '../CountryBox/CountryBox';

import './CountryList.scss';

//Componente funcional - Funação
const CountryList = props =>{
  
    //Variavel local, porem tem que ter o mesmo nome que tem em props
    const { countries } = props;

    return(
        <div className="countryList">
            {
                //props.countries.map( ( country, key ) => <div key={key}>{country.name}</div> )
                countries.map( ( country, key ) => <CountryBox country={country} key={key} /> )
            }
        </div>
    )
}

export default CountryList
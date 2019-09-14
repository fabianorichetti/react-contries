import React from 'react';

import Header from '../Header/Header';

import CountryService from '../../services/CoutryService/CoutryService';
import CountryList from '../CountryList/CountryList';

//Estrutura básica para criar um novo componente
class App extends React.Component {

    constructor(){
        super();

        //Startando o estado da aplicação
        this.state ={
            countries: [],
            filter: ""
        }

        this.handleSearch = this.handleSearch.bind(this);

        this.CountryService = new CountryService();
    }

    //Similar ao onLoad
    componentDidMount(){
        //this.CountryService.getAllCountriesFromApi().then(countries => this.setState({countries}));
        this.CountryService.getAllCountriesFromApi().then(countries => this.setState({countries : countries}));
    }

    //Evento de pesquisa
    handleSearch(e){
        console.log(e.target.value);
        this.setState({
            filter: e.target.value
        });
    }

    //Render quando precisa retornar HTML
    render(){
        return <React.Fragment>
            <Header handleSearch={this.handleSearch} />
            <CountryList countries={this.state.countries.filter( country => country.name.toUpperCase().includes( this.state.filter.toUpperCase() ) )} />
        </React.Fragment>
    }
}

//Exporta o componente, indica que ele pode ser usado 
export default App;
//Não importa o react, pois não retorna HTML

import Axios from "axios";

class CountryService {
  async getAllCountriesFromApi() {
    return Axios.get(`${process.env.REACT_APP_API_URL}/all/`).then(response => response.data);
  }
}

export default CountryService;
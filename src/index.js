import React from 'react'; // Indica que precisa o arquivo 'react' na pasta node_modules.. Ele sabe que esta lá pois esta sem caminho
import ReactDOM from 'react-dom';
//import './index.css'; // ./ indica que esta na mesma pasta do arquivo index
//import App from './App';
//import * as serviceWorker from './serviceWorker';  // Programa que roda/escuta algo.. Em teoria envia notiviação para o usuário


import App from './features/App/App'; // as { } indica que o componente não é exportado como default.
 

// ReactDOM - faz o meio campo entre o react e o dom da páfina
ReactDOM.render(<App />, document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

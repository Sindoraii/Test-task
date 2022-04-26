import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from "./Components/App/App";
// import {DataSource} from "./Components/DataSource/DataSource";




// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(function(response){
//         return response.json();
//     }).then(function(data) {
//     DataSource(data);
// })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);



import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from "./Components/App/App";
// import {DataSource} from "./Components/DataSource/DataSource";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {UserProfile} from "./Components/UserProfile/UserProfile";

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(function(response){
//         return response.json();
//     }).then(function(data) {
//     DataSource(data);
// })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path = "/profile" element = {<UserProfile/>} />
            <Route path="*" element = {
                <div>Страница не найдена</div>
            }/>
        </Routes>
    </BrowserRouter>
);

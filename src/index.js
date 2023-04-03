import React, {useContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from "./Components/App/App";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {UserProfile} from "./Components/UserProfile/UserProfile";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/Test-task" element={<App/>} />
            <Route path = "/profile" element = {<UserProfile/>} />
            <Route path="*" element = {
                <div>Страница не найдена</div>
            }/>
        </Routes>
    </BrowserRouter>
);

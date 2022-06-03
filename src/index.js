import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {BrowserRouter} from "react-router-dom"
ReactDOM.render(
 <BrowserRouter>
    <App/>
 </BrowserRouter>
,document.getElementById("root"));
//render means to show
//ReactDOM.render(what to show,where to show,return type);
//JSX: JavaScript Extendable or JavaScript and XM
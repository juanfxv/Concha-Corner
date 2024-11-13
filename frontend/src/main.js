import React from 'react';
import './styling/App.css';
import {RouterProvider} from "react-router-dom"
import {Router} from "./router"

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
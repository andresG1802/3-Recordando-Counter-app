import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelloWorldApp } from '/src/HelloWorldApp'
import { FirstApp } from './FirstApp';
import '/src/styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloWorldApp/> */}
        <FirstApp />
    </React.StrictMode>
);
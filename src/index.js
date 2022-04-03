import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';

// * Renderizado apto para React18
const root = document.getElementById('root')
const reactRoot = ReactDOMClient.createRoot(root)
reactRoot.render(<App />)

// ! Renderizado deprecado en React18
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
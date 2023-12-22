import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/style.scss';
import App from './App';
import StenographyContextProvider from './context/Stenographycontext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <StenographyContextProvider>
            <App />
      </StenographyContextProvider>
);
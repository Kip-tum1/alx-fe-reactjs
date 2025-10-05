import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './tailwind.css'; // Import the new Tailwind CSS file
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));
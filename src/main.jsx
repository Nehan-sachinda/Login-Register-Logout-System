import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18+
import App from './App.jsx'; // Import the root component
import './index.css'; // Global styles (optional)
// Create a root element and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
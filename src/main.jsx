import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import {appRouter} from './App.jsx'; // Import the router from App.jsx

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} /> {/* Use RouterProvider here */}
  </StrictMode>
);

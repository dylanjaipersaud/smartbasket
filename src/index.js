import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import{
//   createBrowserRouter,
//   RouterProvider,
// } from 'react-router-dom';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// import CartView from './CartView';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/CartView",
//     element: <CartView/>
//   },
// ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

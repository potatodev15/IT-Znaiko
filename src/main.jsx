import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Ogneborci from './components/teams/Ogneborci.jsx'
import Morqci from './components/teams/Morqci.jsx'
import Majoretki from './components/teams/Majoretki.jsx'
import MoreHistory from './components/more/MoreHistory.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/ogneborci",
    element: <Ogneborci />
  },
  {
    path: "/majoretki",
    element: <Majoretki />
  },
  {
    path: "/morqci",
    element: <Morqci />
  },
  {
    path: "/istoriq",
    element: <MoreHistory />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

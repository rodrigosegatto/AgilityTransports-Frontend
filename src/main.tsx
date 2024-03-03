import './global.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

//Pages
import Home from './pages/home';
import ScheduleHome from './pages/schedule/schedule-home';
import ScheduleAdd from './pages/schedule/schedule-add';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true
      },
      {
        path: "/schedule",
        element: <ScheduleHome />
      },
      {
        path: "/schedule/add",
        element: <ScheduleAdd />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

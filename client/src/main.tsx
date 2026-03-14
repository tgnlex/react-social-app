import {RouterProvider} from 'react-router';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import router from './app/app-router.tsx';

import './style/app.css'

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

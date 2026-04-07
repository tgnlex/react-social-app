import {RouterProvider} from 'react-router';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import router from './app/app-router.tsx';
import './css/app.less'


const $app = document.querySelector('#app')!;

createRoot($app).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

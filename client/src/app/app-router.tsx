import { createBrowserRouter } from 'react-router';
import Index from './pages/index.tsx';


const router = createBrowserRouter([
  { path: "/", element: <Index/> },
  { path: "/dashboard/:user", element: <h1>Dashboard</h1> },
  { path: "/feed", element: <h1>News Feed</h1> },
  { path: "/profile/:id", element: <h1>User Profile</h1>}
]);



export default router;

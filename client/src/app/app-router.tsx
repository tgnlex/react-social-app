import { createBrowserRouter } from 'react-router';



const router = createBrowserRouter([
  { path: "/", element: <h1>Index</h1> },
  { path: "/:user", element: <h1>Dashboard</h1> },
  { path: "/feed", element: <h1>News Feed</h1> },
  { path: "/profile/:id", element: <h1>User Profile</h1>}
]);



export default router;

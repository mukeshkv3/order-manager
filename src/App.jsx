import { BrowserRouter, Link, useRoutes } from 'react-router-dom';
import './App.css'
import Provider from './context-related/Provider';
import OrderDetails from './OrderDetails'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import NotFound from './NotFound';

function AppRoutes() {
  const routeDetails = [
    { path: "/", element: <Home /> },
    { path: "/orders", element: <OrderDetails /> },
    { path: "/contact", element: <Provider /> },
    { path: "/*", element: <NotFound /> }
  ]

  return useRoutes(routeDetails)
}

function App() {

  return (
    <>
      <AppRoutes></AppRoutes>
      <Link to={'/'}>Home</Link>
      <Link to={'/orders'}>Orders</Link>
      <Link to={'/client'}>Client</Link>
    </>
  )
}

export default App

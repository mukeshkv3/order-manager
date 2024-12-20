import { BrowserRouter, Link, useRoutes } from 'react-router-dom';
import './App.css'
import Provider from './context-related/Provider';
import OrderDetails, { OrderContext } from './OrderDetails'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import NotFound from './NotFound';
import EditOrder from './EditOrder';
import { useState } from 'react';

function AppRoutes() {
  const routeDetails = [
    { path: "/", element: <Home /> },
    { path: "/orders", element: <OrderDetails /> },
    { path: "/contact", element: <Provider /> },
    { path: "/edit/:id", element: <EditOrder /> },
    { path: "/*", element: <NotFound /> }
  ]

  return useRoutes(routeDetails)
}

function App() {
  const [orders, setOrders] = useState([])

  return (
    <>
      <OrderContext.Provider value={{ orders, setOrders }}>
        <div>
          <div className="nav-links">
            <Link to={'/'}>Home</Link>
            <Link to={'/orders'}>Orders</Link>
            <Link to={'/client'}>Client</Link>
          </div>
          <AppRoutes></AppRoutes>
        </div>
      </OrderContext.Provider>
    </>
  )
}

export default App

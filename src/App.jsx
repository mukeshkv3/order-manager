import { BrowserRouter, useRoutes } from 'react-router-dom';
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
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App

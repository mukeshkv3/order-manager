import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Logistic from './context-related/Logistic';
import PartnerStore from './context-related/PartnerStore';
import Provider from './context-related/Provider';
import OrderDetails from './OrderDetails'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <Router>
      <Provider>
        <Routes>
          <Route path="/" element={<OrderDetails />} />
          <Route path="/order-details" element={<OrderDetails />} />
          <Route path="/partner-store" element={<PartnerStore />} />
          <Route path="/logistic" element={<Logistic />} />
        </Routes>
      </Provider>
    </Router>
  )
}

export default App

import './App.css'
import Provider from './context-related/Provider';
import OrderDetails from './OrderDetails'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <div>
        <OrderDetails></OrderDetails>
        <Provider></Provider>
      </div>
    </>
  )
}

export default App

import './App.css'
import Logistic from './context-related/Logistic';
import PartnerStore from './context-related/PartnerStore';
import Provider from './context-related/Provider';
import OrderDetails from './OrderDetails'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <div>
        <OrderDetails></OrderDetails>
        <Provider>
          <PartnerStore></PartnerStore>
          <Logistic></Logistic>
        </Provider>
      </div>
    </>
  )
}

export default App

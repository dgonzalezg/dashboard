import React, {useState, useEffect} from 'react';
import './App.css';
import './index.scss';
import 
{ get_stock_available, 
  get_pending_orders,
  get_stock_estimate,
  get_debts,
  get_compliance,
  get_boxes_deliveres } 
from './api/http';
import PendinOrders from './components/pending_orders';
import AvailableStock from './components/stock_available';
import StockEstimate from './components/stock_estimate';
import Debts from './components/debts';
import OCs from './components/ocs';
import Delivered from './components/delivered';

function App() {
  const [pending_orders, setPendingOrders] = useState(false);
  const [stock_available, setAvailable] = useState(false);
  const [stock_estimate, setEstimate] = useState(false);
  const [debts, setDebts] = useState(false);
  const [compliance, setCompliance] = useState(false);
  const [boxes, setBoxes] = useState(false);
  useEffect(() => {
    !stock_available &&
      get_stock_available()
    .then(res => setAvailable(res));

    !pending_orders &&
      get_pending_orders()
    .then(res => setPendingOrders(res));

    !stock_estimate &&
    get_stock_estimate()
    .then(res => setEstimate(res));

    !debts &&
    get_debts()
    .then(res => setDebts(res));

    !compliance &&
    get_compliance()
    .then(res => setCompliance(res));

    !boxes &&
    get_boxes_deliveres()
    .then(res => setBoxes(res));
    
    
    
  });
    
 
  return (
    <div className="App">
      <div className="container is-fluid columns is-centered">
        <p className="title">Dashboard Proyecto IIC3103 Grupo 8</p>
      </div>
    {pending_orders && <PendinOrders orders={pending_orders}/>}
    {stock_available.length && <AvailableStock stock={stock_available}/>}
    {stock_estimate && <StockEstimate stock_estimate={stock_estimate}/>}
    {debts && <Debts debts={debts}/>}
    {compliance && <OCs orders={compliance}/>}
    {boxes && <Delivered delivered_boxes={boxes}/>}
    </div>
  );
}

export default App;

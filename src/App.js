import React, {useState, useEffect} from 'react';
import './App.css';
import './index.scss';
import { get_stock_available } from './api/http';
import PendinOrders from './components/pending_orders';
import AvailableStock from './components/stock_available';
import StockEstimate from './components/stock_estimate';
import Debts from './components/debts';
import OCs from './components/ocs';
import Delivered from './components/delivered';

function App() {
  const [stock_available, SetAvailable] = useState([]);

  useEffect(() => {
    get_stock_available().then((res) => {
      console.log(res)
      SetAvailable(res)
    });
  });
  return (
    <div className="App">
      <div className="container is-fluid columns is-centered">
        <p className="title">Dashboard Proyecto IIC3103 Grupo 8</p>
      </div>
    <PendinOrders/>
    {stock_available.length && <AvailableStock stock={stock_available}/>}
    <StockEstimate/>
    <Debts/>
    <OCs/>
    <Delivered/>
    </div>
  );
}

export default App;

import React , { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
import { productos, cajas } from '../data/dicts';
import moment from 'moment';

const AvailableStock = ({stock}) => {
  const returnName = (sku) => {
    const products_key = Object.keys(productos);
    if (products_key.includes(sku)) {
      return productos[sku][0];
    }
    return cajas[sku]['Nombre'];
  }  
  const [currentSKU, setSKU] = useState(stock[0]);
  const parsed_data = currentSKU.data.map(data => {
    const obj = {time: moment(data.time).format('h:mm'), "Cantidad":  data.quantity};
    return obj;
  })
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-half">
        <p className="title is-5">Stock Disponible</p>
        <div className="table-container">
        <table className="table is-fullwidth is-hoverable">
        <thead>
          <tr>
            <th>Producto</th>
          </tr>
        </thead>
        <tbody>
          {stock.map(stock => {
            return (
              <tr className={stock === currentSKU ? 'is-selected':''}key={stock.sku} onClick={() => setSKU(stock)}>
                <td>{returnName(stock.sku)}</td>
              </tr>
            
            );
          })}
        </tbody>
        </table>
        </div>
        </div>
        <div className="column">
          <div className="graph">
        <p className="title is-5">{returnName(currentSKU.sku)}</p>
       
            <LineChart width={868} height={400} data={parsed_data}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="time"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Line type="monotone" dataKey="Cantidad" stroke="#B9675B" activeDot={{r: 8}}/>
          </LineChart>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default AvailableStock;
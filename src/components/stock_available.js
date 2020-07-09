import React , { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { productos } from '../data/products';

const AvailableStock = ({stock}) => {
  console.log(stock);
  const [currentSKU, setSKU] = useState(stock[0]);
  const parsed_data = currentSKU.data.map(data => {
    const obj = {time: data.time, "Cantidad":  data.quantity};
    return obj
  })
  return (
    <div className="container">
      <p className="title is-5">Stock Disponible</p>
      <div className="columns">
        <div className="column is-half">
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
                <td>{productos[stock.sku][0]}</td>
              </tr>
            
            );
          })}
        </tbody>
        </table>
        </div>
        <div className="column">
          <div className="graph">
            <LineChart width={600} height={300} data={parsed_data}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="name"/>
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
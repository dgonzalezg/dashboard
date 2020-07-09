import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { productos, cajas } from '../data/dicts';

const StockEstimate = ({ stock_estimate }) => {
  const returnName = (sku) => {
    const products_key = Object.keys(productos);
    if (products_key.includes(sku)) {
      return productos[sku][0];
    }
    return cajas[sku]['Nombre'];
  }  

  const parsed_data = stock_estimate.map(e => {
    const obj = {sku_number: returnName(e.sku), 'Cantidad Estimada':Math.round(e.stock)};
    return obj;
  })
  return (
    <div className="container metric_3">
      <p className="title is-5">Pronóstico de Stock Disponible</p>
      <div className="graph">
      <BarChart width={1800} height={300} data={parsed_data}
            >
       <CartesianGrid strokeDasharray="3 3"/>
       <XAxis dataKey="sku_number"/>
       <YAxis/>
       <Tooltip/>
       <Legend />
       <Bar dataKey="Cantidad Estimada" fill="#B9675B" />
      </BarChart>
    </div>
      </div>
      
  );
}

export default StockEstimate;
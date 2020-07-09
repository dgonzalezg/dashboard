import React , { useState } from 'react';
import stock_estimate from '../data/stock_estimate';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { productos } from '../data/products';

const StockEstimate = () => {
  const parsed_data = stock_estimate.map(e => {
    const obj = {sku_number: productos[e.sku][0], 'Cantidad Estimada':e.quantity};
    return obj;
  })
  return (
    <div className="container metric_3">
      <p className="title is-5">Pronóstico de Stock Disponible</p>
      <div className="graph">
      <BarChart width={600} height={300} data={parsed_data}
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
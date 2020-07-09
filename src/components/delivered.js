import React from 'react';
import delivered_boxes from '../data/delivered';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const Delivered = () => {
  const parsed_data = delivered_boxes.map(data => {
    const obj = {time: data.timestap, 'Cantidad': data.quantity};
    return obj
  })
  return (
    <div className="container">
      <p className="title is-5">Cajas Entregadas</p>
      <div className="graph">
            <LineChart width={600} height={300} data={parsed_data}
              >
          <XAxis dataKey="time"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Line type="monotone" dataKey="Cantidad" stroke="#8884d8" activeDot={{r: 8}}/>
          </LineChart>  
      </div>
    </div>
  );
}

export default Delivered;
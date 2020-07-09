import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import moment from 'moment';

const Delivered = ({ delivered_boxes }) => {
  const parsed_data = delivered_boxes.map(data => {
    const obj = {time: moment(data.timestap).format('h:mm'), 'Cantidad': data.quantity};
    return obj
  })
  return (
    <div className="container">
      <p className="title is-5">Cajas Entregadas</p>
      <div className="graph">
            <LineChart width={1800} height={300} data={parsed_data}
              >
          <XAxis dataKey="time"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Line type="monotone" dataKey="Cantidad" stroke="#B9675B" activeDot={{r: 8}}/>
          </LineChart>  
      </div>
    </div>
  );
}

export default Delivered;
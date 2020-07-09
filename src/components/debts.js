import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';

const Debts = ({ debts }) => {
  const parsed_data = debts.map(debt => {
    const obj = {id: `Grupo: ${debt.group_id}`, deuda:debt.debt};
    return obj;
  });
  return (
    <div className="container">
      <p className="title is-5">Deuda a otros Grupos</p>
      <div className="graph">
      <BarChart width={1800} height={300} data={parsed_data}
            >
       <CartesianGrid strokeDasharray="3 3"/>
       <XAxis dataKey="id"/>
       <YAxis/>
       <Tooltip/>
       <Legend />
       <ReferenceLine y={0} stroke='#000'/>
       <Bar dataKey="deuda" fill="#B9675B" />
      </BarChart>
      </div>
      
  
    </div>
  );
}

export default Debts;
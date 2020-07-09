import React from 'react';
import {
  PieChart, Pie, Tooltip,
} from 'recharts';

const OCs = ({ orders }) => {
  const acepted_muni = Math.round(((orders.muni.acepted + orders.muni.completed)/orders.muni.total)*100);
  const completed_muni = Math.round((orders.muni.completed/(orders.muni.acepted + orders.muni.completed))*100);
  const completed_groups = Math.round((orders.grupos.completed/(orders.grupos.acepted + orders.grupos.completed))*100);
  const data1 = [{name: 'Aceptadas (%)', value: acepted_muni}, {name:'Rechazadas (%)', value:(100-acepted_muni)}]
  const data2 = [{name: 'Completadas (%)', value: completed_muni}, {name:'No Completadas (%)', value:(100-completed_muni)}]
  const data3 = [{name: 'Completadas (%)', value: completed_groups}, {name:'No Completadas (%)', value:(100-completed_groups)}]
  return (
    <div className="container">
      <p className="title is-5">Cumplimiento Órdenes de Compra</p>
      <div className="columns">
        <div className="column">
        <p className="title is-5">Órdenes de Compra Aceptadas (municipalidad)</p>
        <div className="graph_pie">
          <PieChart width={800} height={400}>
          <Pie isAnimationActive={false} data={data1} dataKey="value" cx={200} cy={200} outerRadius={80} fill="#7A8A5C" label/>
          <Tooltip/>
        </PieChart>
        </div>
        </div>
        <div className="column">
        <p className="title is-5">Órdenes de Compra Completadas (municipalidad)</p>
        <div className="graph_pie">
          <PieChart width={800} height={400}>
          <Pie isAnimationActive={false} data={data2} dataKey="value" cx={200} cy={200} outerRadius={80} fill="#7A8A5C" label/>
          <Tooltip/>
          </PieChart>
        </div>
        </div>
        <div className="column">
        <p className="title is-5">Órdenes de Compra Completadas (grupos)</p>
        <div className="graph_pie">
          <PieChart width={800} height={400}>
          <Pie isAnimationActive={false} data={data3} dataKey="value" cx={200} cy={200} outerRadius={80} fill="#7A8A5C" label/>
          <Tooltip/>
        </PieChart>
        </div>
        </div>
      </div>
    </div>
  );
}

export default OCs;
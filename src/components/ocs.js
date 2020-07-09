import React from 'react';
import { muni, groups } from '../data/ocs';
import {
  PieChart, Pie, Legend, Tooltip,
} from 'recharts';

const OCs = () => {
  const acepted_muni = (muni.acepted/muni.total).toFixed(2)*100;
  const completed_muni = (muni.completed/muni.acepted).toFixed(2)*100;
  const completed_groups = (groups.completed/groups.acepted).toFixed(2)*100;
  const data1 = [{name: 'Aceptadas (%)', value: parseFloat(acepted_muni)}, {name:'Rechazadas (%)', value:100-acepted_muni}]
  const data2 = [{name: 'Completadas (%)', value: completed_muni}, {name:'No Completadas (%)', value:100-completed_muni}]
  const data3 = [{name: 'Completadas (%)', value: completed_groups}, {name:'No Completadas (%)', value:100-completed_groups}]
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
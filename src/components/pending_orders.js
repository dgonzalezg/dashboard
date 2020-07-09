import React from 'react';
import { productos, origin } from '../data/dicts';

const PendingOrders = ({ orders }) => {

  return (
    <div className="container">
      <p className="title is-5">Total de Ordenes pendientes: {orders.length}</p>
    <div className="table-container is-centered metric_1">
  <table className="table is-centered is-fullwidth is-hoverable">
    <thead>
      <tr>
        <th>Producto</th>
        <th>Cantidad</th>
        <th>Origen</th>
      </tr>
    </thead>
    <tbody>
      {orders.map(order => {
        return (
          <tr key={order.order_id}>
            <td>{productos[order.sku][0]}</td>
            <td>{order.quantity}</td>
            <td>{origin[order.origin]}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
</div>
    </div>
    
    
  );
}

export default PendingOrders;
import React from 'react';
import pending_orders from '../data/pending_order';
import { productos } from '../data/products';

const PendingOrders = () => {
  const orders = pending_orders;
  return (
    
      
      <div className="table-container is-centered metric_1">
      <p className="title is-5">Total de Ordenes pendientes: {orders.length}</p>
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
          <tr key={order.id}>
            <td>{productos[order.sku][0]}</td>
            <td>{order.quantity}</td>
            <td>{order.origin}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
</div>
    
  );
}

export default PendingOrders;
import axios from 'axios';
axios.defaults.baseURL = 'http://pandemia8.ing.puc.cl/';
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';


export async function get_pending_orders() {
  const orders = await axios.get('po');
  return orders;
}

export async function get_stock_available() {
  const stocks = await axios.get('sph');
  return stocks;
}

export async function get_stock_estimate() {
  //const stocks = await axios.get('se');
  const stocks = await fetch('http://pandemia8.ing.puc.cl/',{
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': true,
    }});
  return stocks;
}

export async function get_debts() {
  const debts = await axios.get('debt');
  return debts;
}

export async function get_boxes_deliveres() {
  const boxes = await axios.get('debox');
  return boxes;
}
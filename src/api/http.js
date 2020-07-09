
const baseURL = 'http://pandemia8.ing.puc.cl/';

export async function get_pending_orders() {
  const orders = await fetch(`${baseURL}po/`,{
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    }}).then((res) => res.json());
  return orders;
}

export async function get_stock_available() {
  const stocks = await fetch(`${baseURL}sph/`,{
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    }}).then((res) => res.json());
  
  return stocks;
}

export async function get_stock_estimate() {
  const stocks = await fetch(`${baseURL}se/`,{
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    }}).then((res) => res.json());
  
  return stocks;
}

export async function get_debts() {
  const debts = await fetch(`${baseURL}debt/`,{
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    }}).then((res) => res.json());
  return debts;
}

export async function get_boxes_deliveres() {
  const boxes = await fetch(`${baseURL}debox/`,{
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    }}).then((res) => res.json());
  return boxes;
}

export async function get_compliance() {
  const orders = await fetch(`${baseURL}compliance/`,{
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    }}).then((res) => res.json());
  
  return orders;
}
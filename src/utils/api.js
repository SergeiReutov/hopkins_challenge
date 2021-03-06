import axios from 'axios';

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json'
  },
  baseURL: 'http://localhost:3001/api',
  timeout: 10000
});

export const request = (method, url, data) => instance.request({ method, url, data })
  .then(response => response.data);

export const GET = url => request('get', url);
export const POST = (url, data) => request('post', url, data);
export const PUT = (url, data) => request('put', url, data);
export const DELETE = url => request('delete', url);

export const requestExternal = (method, url, data) => axios({ method, url, data })
  .then(response => response.data);

export const GET_EXTERNAL = url => requestExternal('get', url);
export const POST_EXTERNAL = (url, data) => requestExternal('post', url, data);
export const PUT_EXTERNAL = (url, data) => requestExternal('put', url, data);
export const DELETE_EXTERNAL = url => requestExternal('delete', url);

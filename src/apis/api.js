import axios from 'axios';

const api = axios.create({
    baseURL: 'https://61b9891938f69a0017ce60d7.mockapi.io/'
});

export default api;
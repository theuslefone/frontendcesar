import axios from 'axios';

export const linkApi = 'http://fe0beb5839c0.ngrok.io'

export const api = axios.create({
    baseURL: linkApi
});
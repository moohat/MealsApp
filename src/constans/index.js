import axios from 'axios';
const API_URL = 'http://api.wibs.sch.id/v2/meal/post';

export const request = axios.create({
  baseURL: API_URL,
  timeout: 1000,
  headers: { 'Application-Token': 'geSzgVahOlowulcgHEtQmu9Ybofk1lRnPFd3V5atSEu1SD1dt2' }
});
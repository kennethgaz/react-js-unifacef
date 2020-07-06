import axios from 'axios';
import { configs } from '../configs';

export const getPrice = () => {
  return axios.request({ method: 'GET', url: configs.apis.economia });
}
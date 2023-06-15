import { Device } from '../types/Device';
import { client } from '../services/fetchPhones';

export const getPhones = () => {
  return client.get<Device[]>('/products/phones');
};

export const getSortedPhones = (sortParams: string) => {
  return client.get<Device[]>(`/products/phones?${sortParams}`);
};

export const getPhone = (phoneId: string) => {
  return client.get<Device[]>(`/products/phones/${phoneId}`);
};

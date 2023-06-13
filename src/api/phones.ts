import { Device } from '../types/Device';
import { client } from '../services/fetchPhones';

export const getPhones = () => {
  return client.get<Device[]>('/phones');
};

export const getPhone = (phoneId: string) => {
  return client.get<Device[]>(`/phones/${phoneId}`);
};

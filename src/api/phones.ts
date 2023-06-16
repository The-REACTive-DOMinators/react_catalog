import { Device } from '../types/Device';
import { PhoneDescription } from '../types/PhoneDescription';
import { client } from '../services/fetchPhones';

export const getPhones = () => {
  return client.get<Device[]>('/phones');
};

export const getPhone = (phoneId: string) => {
  return client.get<Device[]>(`/products/phones/${phoneId}`);
};

export const getPhoneDescription = (phoneId: string) => {
  return client.get<PhoneDescription>(`/products/phones/${phoneId}`);
};

export const getRecomendedPhones = (phoneId: string) => {
  return client.get<Device[]>(`/products/phones/${phoneId}/recommended `);
};

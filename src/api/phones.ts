import { Device } from '../types/Device';
import { PhoneDescription } from '../types/PhoneDescription';
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

export const getPhoneDescription = (phoneId: string) => {
  return client.get<PhoneDescription>(`/products/phones/${phoneId}`);
};

export const getLength = () => {
  return client.get<number>('/products/phones/count');
};

export const getProductSection = (url: string) => {
  return client.get<Device[]>(`/${url}`);
};

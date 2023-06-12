import { Phone } from '../types/Phone';
import { client } from '../services/fetchPhones';

export const addPhone = (phone: Phone) => {
  const { phoneId, ...data } = phone;

  return client.post<Phone>(`/phones/${phoneId}`, data);
};

export const deletePhone = (phoneId: string) => {
  return client.delete(`/phones/${phoneId}`);
};

export const updatePhone = (phone: Phone) => {
  const { phoneId, ...data } = phone;

  return client.patch<Phone>(`/phones/${phoneId}`, data);
};

export const getPhones = () => {
  return client.get<Phone[]>('/phones');
};

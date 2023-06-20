import { useState } from 'react';

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [state, setState] = useState(() => {
    const data = window.localStorage.getItem(key);

    return data ? JSON.parse(data) : initialValue;
  });

  const setData = (value: T | ((carrValue: T) => T)) => {
    const valueToStore = value instanceof Function
      ? value(state)
      : value;

    setState(valueToStore);

    window.localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [state, setData];
};

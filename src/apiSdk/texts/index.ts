import axios from 'axios';
import queryString from 'query-string';
import { TextInterface, TextGetQueryInterface } from 'interfaces/text';
import { GetQueryInterface } from '../../interfaces';

export const getTexts = async (query?: TextGetQueryInterface) => {
  const response = await axios.get(`/api/texts${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createText = async (text: TextInterface) => {
  const response = await axios.post('/api/texts', text);
  return response.data;
};

export const updateTextById = async (id: string, text: TextInterface) => {
  const response = await axios.put(`/api/texts/${id}`, text);
  return response.data;
};

export const getTextById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/texts/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteTextById = async (id: string) => {
  const response = await axios.delete(`/api/texts/${id}`);
  return response.data;
};

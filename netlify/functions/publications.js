// netlify/functions/publications.js
import { publications } from '../data/publications';

export const handler = async () => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(publications),
  };
};
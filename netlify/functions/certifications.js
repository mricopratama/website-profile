// netlify/functions/certifications.js
import { certifications } from './data/certifications.js';

export const handler = async () => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(certifications),
  };
};
// netlify/functions/certifications.js
import { certifications } from '../../src/data/certifications';

export const handler = async () => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(certifications),
  };
};
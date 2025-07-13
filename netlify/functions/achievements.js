// netlify/functions/achievements.js
import { achievements } from '../data/achievements.ts';

export const handler = async () => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(achievements),
  };
};
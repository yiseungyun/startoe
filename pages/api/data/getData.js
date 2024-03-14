'use client'
import axios from "axios"

const database_url = process.env.DATABASE_URL
export const getLearningData = async (path, index) => {
  const response = await axios.get(`${database_url}/${path}/${index}.json`);
  response.data.data.sort((a, b) => a.id - b.id);
  return response.data.data;
};

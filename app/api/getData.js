'use client'
import axios from "axios"

const database_url = process.env.NEXT_PUBLIC_DATABASE_URL
export const getLearningData = async (path, index) => {
  const response = await axios.get(`${database_url}/${path}/${index}.json`);
  response.data.data.sort((a, b) => a.id - b.id);
  return response.data.data;
};

export const getLearningOneData = async (path, index, id) => {
  const response = await axios.get(`${database_url}/${path}/${index}.json`);
  return response.data.data[id-1];
};
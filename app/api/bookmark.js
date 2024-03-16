'use client'
import axios from "axios"

export const postBookmarkData = async (data) => {
  const response = await axios.post('/api/bookmark/update', data);
  return response;
};
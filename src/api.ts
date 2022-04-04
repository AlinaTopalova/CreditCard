import axios from 'axios';
import { Post, User } from 'types';

export const BACKEND_URL = 'https://jsonplaceholder.typicode.com/';

const axiosInstance = axios.create({
  baseURL: BACKEND_URL,
})

export async function getUsers() {
  const { data } = await axiosInstance.get<User[]>('users');
  return data;
}

export async function getPosts(userId?: number) {
  const { data } = await axiosInstance.get<Post[]>(`posts?userId=${userId}`);
  return data;
}

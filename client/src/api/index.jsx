import axios from "axios";
import authHeader from "../ultis/authHeader";
const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);

export const deletePost = async (id) => await axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);

// Handle Auth

const API_URL = "http://localhost:5000/auth/test";

export const getPublicContent = async () => {
  await axios.get(`${API_URL}/all`);
};

export const getAdminBoard = async () => {
  await axios.get(`${API_URL}/admin`, { headers: authHeader });
};

const urlAuth = "http://localhost:5000/auth";

export const getUser = () => axios.get(`${urlAuth}`);

export const login = (formData) => axios.post(`${urlAuth}/signin`, formData);
export const register = (formData) => axios.post(`${urlAuth}/signup`, formData);

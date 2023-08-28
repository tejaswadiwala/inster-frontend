import axios, { AxiosInstance } from 'axios'

export const insterAxiosInstance: AxiosInstance = axios.create({
  // TODO: Add the below in the environment variable
  // baseURL: 'http://localhost:3300',
  baseURL: 'https://inster-backend-aae4e333504b.herokuapp.com',
})

insterAxiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken') // Get the token from localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

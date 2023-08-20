import axios, { AxiosInstance } from 'axios'

export const insterAxiosInstance: AxiosInstance = axios.create({
  // TODO: Add the below in the environment variable
  baseURL: 'http://localhost:3300',
})

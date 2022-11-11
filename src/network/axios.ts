import axios, { AxiosError } from 'axios'

const axiosClient = axios.create({
  baseURL: 'http://localhost:3000',
})

axiosClient.interceptors.response.use(
  (response: any) => response,
  (error: AxiosError<any, any>) => {
    const newError = { message: error.message, status: error.response?.status }

    return Promise.reject(newError)
  }
)

export default axiosClient

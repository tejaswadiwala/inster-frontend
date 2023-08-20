import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export const getResponse = async (
  instance: AxiosInstance,
  endpoint: string,
  requestId: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse> => {
  const type = 'AxiosHelper.getResponse'
  try {
    console.log({
      type: type,
      message: `${type}: Starting now.`,
      requestId: requestId,
    })

    let response: AxiosResponse

    if (config) {
      response = await instance.get(endpoint, config)
    } else {
      response = await instance.get(endpoint)
    }

    console.log({
      type: type,
      message: `${type}: Successfully completed execution.`,
      requestId: requestId,
    })
    return response
  } catch (error) {
    console.error({
      type: type,
      message: `${type}: Error occurred.`,
      error: error,
      requestId: requestId,
    })
    throw error
  }
}

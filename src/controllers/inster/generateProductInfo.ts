import Helpers from '../../helpers/Helpers'
import { insterAxiosInstance } from './insterAuth'
import { AxiosResponse } from 'axios'

export const generateProductInfo = async (
  requestId: string
): Promise<AxiosResponse> => {
  const type = 'InsterController.generateProductInfo'
  try {
    console.log({
      type: type,
      message: `${type}: Starting now.`,
      requestId: requestId,
    })

    const helpers: Helpers = new Helpers(requestId)
    const endpoint = '/post/generateProductInfo'

    const response: AxiosResponse = await helpers.axiosHelper.getResponse(
      insterAxiosInstance,
      endpoint
    )

    console.log({
      type: type,
      message: `${type}: Successfully completed execution - ${response.data}.`,
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

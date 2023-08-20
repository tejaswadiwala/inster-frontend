import Helpers from '../../helpers/Helpers'
import { RegistrationRequestDTO } from './dtos/RegistrationRequestDTO'
import { insterAxiosInstance } from './insterAuth'
import { AxiosResponse } from 'axios'

export const register = async (
  data: RegistrationRequestDTO,
  requestId: string
): Promise<AxiosResponse> => {
  const type = 'InsterController.register'
  try {
    console.log({
      type: type,
      message: `${type}: Starting now.`,
      requestId: requestId,
    })

    const helpers: Helpers = new Helpers(requestId)
    const endpoint = '/register'

    const response: AxiosResponse = await helpers.axiosHelper.postResponse(
      insterAxiosInstance,
      data,
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

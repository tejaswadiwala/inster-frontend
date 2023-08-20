import { AxiosResponse } from 'axios'
import { RegistrationRequestDTO } from './dtos/RegistrationRequestDTO'
import { register } from './register'

class InsterController {
  private requestId: string

  constructor(requestId: string) {
    this.requestId = requestId
  }

  public async register(
    registrationInformation: RegistrationRequestDTO
  ): Promise<AxiosResponse> {
    return register(registrationInformation, this.requestId)
  }
}

export default InsterController

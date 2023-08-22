import { AxiosResponse } from 'axios'
import { RegistrationRequestDTO } from './dtos/RegistrationRequestDTO'
import { register } from './register'
import { LoginRequestDTO } from './dtos/LoginRequestDTO'
import { login } from './login'
import { generateImage } from './generateImage'

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

  public async login(loginRequest: LoginRequestDTO): Promise<AxiosResponse> {
    return login(loginRequest, this.requestId)
  }

  public async generateImage(): Promise<AxiosResponse> {
    return generateImage(this.requestId)
  }
}

export default InsterController

import { AxiosResponse } from 'axios'
import { RegistrationRequestDTO } from './dtos/RegistrationRequestDTO'
import { register } from './register'
import { LoginRequestDTO } from './dtos/LoginRequestDTO'
import { login } from './login'
import { generateProductInfo } from './generateProductInfo'
import { postPhotoToInstagram } from './postPhotoToInstagram'

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

  public async generateProductInfo(): Promise<AxiosResponse> {
    return generateProductInfo(this.requestId)
  }
  public async postPhotoToInstagram(): Promise<AxiosResponse> {
    return postPhotoToInstagram(this.requestId)
  }
}

export default InsterController

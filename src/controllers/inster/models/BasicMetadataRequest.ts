export type BasicMetadataRequest = {
  id?: string
  accessToken?: string
  fields?: {
    [key: string]: boolean
  }
}

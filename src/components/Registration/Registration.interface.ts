export interface RegistrationData {
  username: string,
  password: string
}

export interface Props {
  errorMessage: string,
  createUser: (data: RegistrationData) => void
}

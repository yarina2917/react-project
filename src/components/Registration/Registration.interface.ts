export interface Props {
  errorMessage: string,
  createUser: (data: IRegistrationData) => void
}

interface IRegistrationData {
  username: string,
  password: string
}

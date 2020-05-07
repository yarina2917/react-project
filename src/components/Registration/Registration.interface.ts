export interface Props {
  errorMessage: string,
  createUser: (data: IRegistrationData) => void,
  clearError: () => void
}

interface IRegistrationData {
  username: string,
  password: string
}

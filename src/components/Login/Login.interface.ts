export interface Props {
  errorMessage: string,
  loginUser: (data: ILoginData) => void,
  clearError: () => void
}

interface ILoginData {
  username: string,
  password: string
}

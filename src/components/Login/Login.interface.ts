export interface Props {
  errorMessage: string,
  loginUser: (data: ILoginData) => void
}

interface ILoginData {
  username: string,
  password: string
}

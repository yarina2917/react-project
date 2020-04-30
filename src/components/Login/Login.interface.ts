export interface LoginData {
  username: string,
  password: string
}

export interface Props {
  errorMessage: string,
  loginUser: (data: LoginData) => void
}

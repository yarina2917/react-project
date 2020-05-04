export interface Props {
  user: any
  errorMessage: string,
  updateUser: (data: IUpdateUserData) => void,
  clearUserError: () => void
}

interface IUpdateUserData {
  userId: string,
  data: any,
  callback: () => void
}

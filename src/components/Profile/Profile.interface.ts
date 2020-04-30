export interface Props {
  user: any
  errorMessage: string,
  updateUser: (data: UpdateUserInfo) => void,
  clearUserError: () => void
}

interface UpdateUserInfo {
  userId: string,
  data: any,
  callback: () => void
}

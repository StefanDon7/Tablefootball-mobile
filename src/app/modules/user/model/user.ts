export interface UserAddRequest {
  username: string,
  firstname: string,
  lastname: string,
  email: string,
  password: string
}
export interface User {
  username: string,
  firstname: string,
  lastname: string,
  email: string,
}
export interface LoginUserRequest {
  email: string,
  password: string
}

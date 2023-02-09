export interface UserAddRequest {
  username: string,
  firstname: string,
  lastname: string,
  email: string,
  password: string
}

export interface User {
  id: string,
  uuid: string,
  username: string,
  firstname: string,
  lastname: string,
  email: string,
}

export interface LoginUserRequest {
  email: string,
  password: string
}

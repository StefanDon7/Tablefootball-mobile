export enum Regex {
  PASSWORD = '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$',
  EMAIL = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'
}

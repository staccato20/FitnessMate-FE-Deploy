import { ReactNode } from "react"

export interface User {
  userName: string
  loginEmail: string
  sex: string
  birthDate: string
}

export interface Workout {
  englishName: string
  koreanName: string
  imageURL: string
  videoLink: string
  description: string
  bodyPartKoreanName: string
}

export interface Machine {
  machineId: number
  bodyPartKoreanName: string
  englishName: string
  koreanName: string
}

export interface BodyData {
  date: string
  bodyDataId: number
  height: number
  weight: number
  bodyFat: number
  muscleMass: number
  upDownBalance: number
}

export interface SignupPayload {
  userName: string
  loginEmail: string
  password: string
  sex: string
  Date: string
  height: number
  weight: number
  bodyFat: number
  muscleMass: number
  upDownBalance: number
}

export interface SignupResponse {
  accessToken: string
  refreshToken: string
  rememberMe: boolean
}

export interface UpdateUserPayload {
  userName: string
  birthDate: string
}
export interface UpdateUserResponse {}

export interface UpdateUserPasswordPayload {
  oldPassword: string
  newPassword: string
}
export interface UpdateUserPasswordResponse {}

export type GetUserInfoResponse = User

export interface PostUserDeletePayload {
  password: string
}

export interface PostLoginPayload {
  loginEmail: string
  password: string
  rememberMe: boolean
}

export type PostLoginResponse = SignupResponse

export type GetAccessTokenResponse = SignupResponse

export interface PostNewPasswordPayload {
  mailAdderss: string
}

export interface PostNewPasswordResponse {
  status: "ok" | "fail"
  message: string
}

export interface GetVerifyCodePayload {
  mailAdderss: string
  verificationCode: string
}

export type GetVerifyCodeResponse = PostNewPasswordResponse

export type StrictPropsWithChildren<P = unknown> = P & {
  children: ReactNode
}

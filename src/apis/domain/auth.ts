import { instance } from "@apis/instance"

import {
  GetAccessTokenResponse,
  GetUserInfoResponse,
  PostLoginPayload,
  PostLoginResponse,
  PostNewPasswordPayload,
  PostNewPasswordResponse,
  PostUserDeletePayload,
  SignupPayload,
  SignupResponse,
  UpdateUserPayload,
} from "@typpes/type"

export interface fetchUserProps {
  userName: string
  loginEmail: string
  sex: string
  birthDate: string
}

// 사용자 가입
const postUser = (data: SignupPayload) =>
  instance.post<SignupResponse>("/api/user/auth", data)

// 사용자 정보 수정(토큰)
const modifyUser = (data: UpdateUserPayload) =>
  instance.post("/api/user/private", data)

// 사용자 비밀번호 수정(토큰)
const modifyPassword = (data: PostNewPasswordPayload) =>
  instance.post<PostNewPasswordResponse>("/api/user/private/password", data)

// 사용자 정보 조회(토큰)
const fetchUser = () =>
  instance.get<GetUserInfoResponse>("/api/user/private").then((res) => res.data)

// 회원 탈퇴(토큰)
const deleteUser = (data: PostUserDeletePayload) =>
  instance.post("/api/user/delete", data)

const login = (data: PostLoginPayload) =>
  instance.post<PostLoginResponse>("/api/auth/login", data)

// refresh토큰 필요
const logout = () => instance.get("/api/auth/logout")

// accessToken 재발급(refersh 토큰 필요)
const getAccessToken = () =>
  instance.get<GetAccessTokenResponse>("/api/auth/refresh")

const authAPI = {
  postUser,
  modifyUser,
  modifyPassword,
  fetchUser,
  deleteUser,
  login,
  logout,
  getAccessToken,
}

export default authAPI

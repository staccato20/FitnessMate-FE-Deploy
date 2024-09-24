import { instance } from "@apis/instance"

import {
  GetAccessTokenResponse,
  PostLoginPayload,
  PostLoginResponse,
  PostNewPasswordPayload,
  PostNewPasswordResponse,
  PostUserDeletePayload,
  SignupPayload,
  SignupResponse,
  UpdateUserPayload,
  User,
} from "@typpes/type"

const postUser = (data: SignupPayload) =>
  instance.post<SignupResponse>("/api/user/auth", data)

const modifyUser = (data: UpdateUserPayload) =>
  instance.post("/api/user/private", data)

const modifyPassword = (data: PostNewPasswordPayload) =>
  instance.post<PostNewPasswordResponse>("/api/user/private/password", data)

const fetchUser = () =>
  instance.get<User>("/api/user/private").then((res) => res.data)

const deleteUser = (data: PostUserDeletePayload) =>
  instance.post("/api/user/delete", data)

const login = (data: PostLoginPayload) =>
  instance.post<PostLoginResponse>("/api/auth/login", data)

// refresh토큰 필요
const logout = () => instance.get("/api/auth/logout")

// refersh 토큰 필요
const getAccessToken = () =>
  // header에 refreshToken 넣기
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

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

const editUser = (data: UpdateUserPayload) =>
  instance.post("/api/user/private", data)

const editPassword = (data: PostNewPasswordPayload) =>
  instance.post<PostNewPasswordResponse>("/api/user/private/password", data)

const fetchUser = () =>
  instance.get<User>("/api/user/private").then((res) => res.data)

const deleteUser = (data: PostUserDeletePayload) =>
  instance.post("/api/user/delete", data)

const login = (data: PostLoginPayload) =>
  instance.post<PostLoginResponse>("/api/auth/login", data)

const logout = () => instance.get("/api/auth/logout")

const getAccessToken = () =>
  instance.get<GetAccessTokenResponse>("/api/auth/refresh")

const authAPI = {
  postUser,
  editUser,
  editPassword,
  fetchUser,
  deleteUser,
  login,
  logout,
  getAccessToken,
}

export default authAPI

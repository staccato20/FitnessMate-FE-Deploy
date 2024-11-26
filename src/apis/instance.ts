import axios, { AxiosError, AxiosRequestConfig } from "axios"

import authAPI from "@apis/domain/auth"

const axiosConfig: AxiosRequestConfig = {
  withCredentials: true,
}

export const instance = axios.create(axiosConfig)

instance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken")
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
})

instance.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    if (error.response.data.status === "ROUTINE_NOT_FOUND_EXCEPTION") {
      console.log("routineId와 일치하는 routine이 없습니다")
    }
    if (error.response.data.status === "ALREADY_EXIST_MY_WORKOUT_EXCEPTION") {
      console.log("이미 존재하는 운동입니다")
    }

    if (error.response.data.status === "ALREADY_LOGOUT_EXCEPTION") {
      const refreshToken = localStorage.getItem("refreshToken")
      const originalRequest = error.config
      originalRequest.headers.Authorization = `Bearer ${refreshToken}`
      return await axios(originalRequest)
    }

    if (error.response.data.status === "EXPIRED_ACCESS_TOKEN_EXCEPTION") {
      const rememberMe = localStorage.getItem("rememberMe")
      const refreshToken = localStorage.getItem("refreshToken")

      if (!rememberMe || !refreshToken) {
        return
      }

      const isKeepLogin = JSON.parse(rememberMe)

      if (isKeepLogin) {
        try {
          const originalRequest = error.config
          const response = await authAPI.getAccessToken()
          const newAccessToken = response.data.accessToken
          localStorage.setItem("accessToken", newAccessToken)
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
          return await axios(originalRequest)
        } catch (err) {
          if (err instanceof AxiosError) {
            if (!err.response) {
              return
            }
            if (
              err.response.data.status === "EXPIRED_REFRESH_TOKEN_EXCEPTION"
            ) {
              alert("토큰이 만료되었습니다. 다시 로그인해주세요.")
            }
          }
        }
      } else {
        alert("토큰이 만료되었습니다. 다시 로그인해주세요.")
      }
    }
  },
)

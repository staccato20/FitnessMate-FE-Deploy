import { UseFormSetError } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import { useUserStore } from "@store/useUserStore"

import { useMutation, useQueryClient } from "@tanstack/react-query"

import authAPI from "@apis/domain/auth"

import { PostLoginPayload } from "@typpes/type"

export const useLogin = (
  setError: UseFormSetError<{ loginEmail: string; password: string }>,
) => {
  const queryClient = useQueryClient()
  const { saveUser, logout } = useUserStore()

  const navigate = useNavigate()
  return useMutation({
    mutationKey: ["login"],
    mutationFn: (submission: PostLoginPayload) => authAPI.login(submission),
    onSuccess: async ({ status, data: { accessToken, refreshToken } }) => {
      if (status === 200) {
        queryClient.refetchQueries({
          queryKey: ["USERINFO"],
          exact: true,
        })
        localStorage.setItem("accessToken", accessToken)
        localStorage.setItem("refreshToken", refreshToken)
        localStorage.setItem("rememberMe", "true")

        const userInfo = await queryClient.fetchQuery({
          queryKey: ["USERINFO2"],
          queryFn: () => authAPI.fetchUser(),
        })
        if (userInfo) {
          saveUser(userInfo)
        } else {
          logout()
        }

        navigate("/")
      }
    },
    onError: () => {
      if (setError) {
        setError("root", {
          type: "server",
          message: "이메일 또는 비밀번호를 잘못 입력했습니다",
        })
      }
    },
  })
}

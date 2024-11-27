import { UseFormSetError } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import { useMutation, useQueryClient } from "@tanstack/react-query"

import authAPI from "@apis/domain/auth"

import { PostLoginPayload } from "@typpes/type"

export const useLogin = (
  setError: UseFormSetError<{ loginEmail: string; password: string }>,
) => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  return useMutation({
    mutationKey: ["login"],
    mutationFn: (submission: PostLoginPayload) => authAPI.login(submission),
    onSuccess: async ({ status, data: { accessToken, refreshToken } }) => {
      if (status === 200) {
        await queryClient.invalidateQueries({
          queryKey: ["USERINFO"],
          exact: true,
        })
        await queryClient.refetchQueries({
          queryKey: ["USERINFO"],
          exact: true,
        }) // 강제 새로고침
        localStorage.setItem("accessToken", accessToken)
        localStorage.setItem("refreshToken", refreshToken)
        localStorage.setItem("rememberMe", "true")
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

import { useNavigate } from "react-router-dom"

import { useMutation } from "@tanstack/react-query"

import authAPI from "@apis/domain/auth"

import { PostLoginPayload } from "@typpes/type"

export const useLogin = () => {
  const navigate = useNavigate()
  return useMutation({
    mutationKey: [],
    mutationFn: (submission: PostLoginPayload) => authAPI.login(submission),
    onSuccess: ({
      status,
      data: { accessToken, refreshToken, rememberMe },
    }) => {
      if (status === 200) {
        localStorage.setItem("accessToken", accessToken)
        localStorage.setItem("refreshToken", refreshToken)
        localStorage.setItem("rememberMe", rememberMe.toString())
        navigate("/")
      }
    },
  })
}

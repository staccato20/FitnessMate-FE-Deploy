import { useNavigate } from "react-router-dom"

import { useMutation, useQueryClient } from "@tanstack/react-query"

import authAPI from "@apis/domain/auth"

export const useLogout = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  return useMutation({
    mutationKey: [],
    mutationFn: () => authAPI.logout(),
    onSuccess: () => {
      localStorage.removeItem("accessToken")
      localStorage.removeItem("refreshToken")
      localStorage.removeItem("rememberMe")
      queryClient.removeQueries({ queryKey: ["userInfo"] })
      navigate("/")
    },
  })
}

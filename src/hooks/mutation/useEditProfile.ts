import { useMutation, useQueryClient } from "@tanstack/react-query"

import authAPI from "@apis/domain/auth"

import { UpdateUserPayload } from "@typpes/type"

export const useEditProfile = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["postUpdateProfile"],
    mutationFn: (req: UpdateUserPayload) => authAPI.editUser(req),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["USERINFO"],
      })
    },
  })
}

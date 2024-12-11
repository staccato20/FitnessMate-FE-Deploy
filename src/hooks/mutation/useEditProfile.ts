import { useMutation, useQueryClient } from "@tanstack/react-query"

import authAPI from "@apis/domain/auth"

import { EditUserPayload } from "@typpes/type"

export const useEditProfile = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["postEditProfile"],
    mutationFn: (req: EditUserPayload) => authAPI.editUser(req),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["USERINFO"],
      })
    },
  })
}

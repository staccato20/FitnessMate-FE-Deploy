import { useMutation } from "@tanstack/react-query"

import authAPI from "@apis/domain/auth"

import { EditUserPasswordPayload } from "@typpes/type"

import { useModal } from "@hooks/useModal"

export const usePostEditPassword = () => {
  const { onOpen } = useModal("알림")
  return useMutation({
    mutationKey: ["postEditPassword"],
    mutationFn: (payload: EditUserPasswordPayload) =>
      authAPI.editPassword(payload),
    onError: () => {
      onOpen()
    },
    onSuccess: ({ data: status }) => {
      if (status === "ok") {
        // 성공
      } else if (status === "fail") {
        onOpen()
      }
    },
  })
}

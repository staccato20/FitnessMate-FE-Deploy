import { useMutation } from "@tanstack/react-query"

import authAPI from "@apis/domain/auth"

import { SignupPayload } from "@typpes/type"

export const usePostSignup = () => {
  return useMutation({
    mutationKey: ["usePostSignup"],
    mutationFn: async (submission: SignupPayload) =>
      await authAPI.postUser(submission),
  })
}

// @ts-nocheck

import { Message } from "@/types"
import { useMutation, useQueryClient } from "@tanstack/react-query"

import { useParams } from "react-router-dom"
import sendMessageAPI from "../apis/sendMessageAPI"
import { QUERY_KEY_GET_GROUP_MESSAGE_LIST } from "./useMessageGroupList"
import { QUERY_KEY_GET_MESSAGE_LIST } from "./useMessageList"

import { useModal } from "@/hooks/useModal" // useModal 훅을 import 합니다.
import AlertModal from "@/components/AlertModal" // AlertModal 컴포넌트를 import 합니다.
import { DM_ERROR } from "@/constants/errors" // DM_ERROR 상수를 import 합니다.
import sendNotification from "@/utils/sendNotification" // sendNotification 함수를 import 합니다.

export const QUERY_KEY_SEND_MESSAGE = "SEND_MESSAGE"

const useSendMessage = () => {
  const queryClient = useQueryClient()
  const { userId: othersUserId } = useParams()
  const { isShowModal, showModal, closeModal } = useModal()

  const AlertModalComponent = isShowModal ? (
    <AlertModal
      isShow={isShowModal}
      alertMessage={DM_ERROR.SEND_MESSAGE}
      onClose={closeModal}
    />
  ) : null

  const sendMessage = useMutation({
    mutationKey: [QUERY_KEY_SEND_MESSAGE],
    mutationFn: sendMessageAPI,
    onSuccess: (response: Message) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY_GET_MESSAGE_LIST] })
      if (!othersUserId) {
        return
      }

      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY_GET_GROUP_MESSAGE_LIST],
      })

      sendNotification({
        notificationType: "MESSAGE",
        notificationTypeId: response._id,
        userId: othersUserId,
      })
    },
    onError: () => {
      showModal()
    },
  })
  return { AlertModalComponent, sendMessage }
}

export default useSendMessage

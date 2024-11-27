import { create } from "zustand"

import { User } from "@typpes/type"

interface UserStoreProps {
  user: User | null
  isLogin: boolean
  saveUser: (user: User) => void
  checkLogin: () => void
  logout: () => void
}

export const useUserStore = create<UserStoreProps>((set) => ({
  user: null,
  isLogin: false,
  saveUser: (user) => {
    set({ user, isLogin: true })
  },
  checkLogin: () => {
    const accessToken = localStorage.getItem("accessToken")
    if (accessToken) {
      set({ isLogin: true })
    } else {
      set({ user: null, isLogin: false })
    }
  },
  logout: () => {
    set({ user: null, isLogin: false })
  },
}))

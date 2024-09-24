import { create } from "zustand"

interface PathStoreProps {
  isRecommendPage: boolean
  setIsRecommendPage: (path: string) => void
}

export const usePathStore = create<PathStoreProps>((set) => ({
  isRecommendPage: false,
  setIsRecommendPage: (path) =>
    set(() => ({ isRecommendPage: path === "/recommend/result" })),
}))

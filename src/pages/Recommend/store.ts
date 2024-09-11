import { create } from "zustand"

interface BodyPartProps {
  bodyPart: string[]
  setBodyPart: (bodyPart: string[]) => void
}

export const useRecommendStore = create<BodyPartProps>((set) => ({
  bodyPart: [],
  setBodyPart: (bodyPart) => set(() => ({ bodyPart })),
}))

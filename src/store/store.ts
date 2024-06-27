import {create} from "zustand"

const useSignupStore = create((set) => ({
	profile: {},
	bodyinfo: {},
	bodyfigure: {},
	setProfile: (profileFormValue) => set(() => ({profile: profileFormValue})),
	setBodyInfo: (bodyinfoFormValue) =>
		set(() => ({bodyinfo: bodyinfoFormValue})),
	setBodyfigure: (bodyfigureFormValue) =>
		set(() => ({bodyfigure: bodyfigureFormValue})),
}))

export default useSignupStore

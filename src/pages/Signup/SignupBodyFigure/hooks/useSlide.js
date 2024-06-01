import {useState} from "react"

export const useSlide = () => {
	const [slideVolume, setSlideVolume] = useState(5)

	const handleSlide = (e) => {
		setSlideVolume(parseInt(e.target.value))
		// handleBalanceText(parseInt(e.target.value))
	}

	let slideText
	if (Number(slideVolume) < 5) {
		slideText = "하체가 상체보다 더 발달했어요"
	}
	if (Number(slideVolume) === 5) {
		slideText = "둘 다 발달했거나 큰 차이 없어요"
	}
	if (Number(slideVolume) > 5) {
		slideText = "상체가 하체보다 더 발달했어요"
	}

	return {slideVolume, slideText, handleSlide}
}

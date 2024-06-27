import {useState} from "react"

export const useSelectFigure = () => {
	const [selectedFigure, setSelectedFigure] = useState(-1) // 체형import {useState} from "react"

	const handleSelectFigure = (idx) => {
		setSelectedFigure(idx)
	}

	return {selectedFigure, setSelectedFigure, handleSelectFigure}
}

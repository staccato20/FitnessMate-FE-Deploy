// 편집 모달

import React, { useState, useEffect } from "react";
import * as S from "./StyledFixModal";
import x from "../../../../assets/images/X_Icon.svg";
import trash from "../../../../assets/images/Trash_Icon.svg";
import plus from "../../../../assets/images/Plus_Icon.svg";
import { BigButton } from "../../../../components/index";
import { DUMMY_DATA } from '../MypageHome';

function FixModal({ onClose }) {

	const [isOpen, setIsOpen] = useState(true);

	const [items, setItems] = useState([...DUMMY_DATA]); // DUMMY_DATA를 복사하여 초기화

	const [text, setText] = useState("");
	const [editableItemId, setEditableItemId] = useState(null); // 수정 중인 항목의 ID를 관리

	const [inputs, setInputs] = useState([]); // 입력 필드 목록
	const [inputTexts, setInputTexts] = useState([]); // 각 입력 필드에 대한 별도의 상태를 관리하는 배열

	const handleDoubleClick = (id) => {
		setEditableItemId(id);
		// 모달이 열릴 때 text 상태 초기화
		setText("");
	};

	const handleChange = (e, id) => {
		const updatedItems = items.map((item) => {
			if (item.id === id) {
				item.text = e.target.value; // 해당 항목의 text 값을 변경
			}
			return item;
		});
		setItems(updatedItems);
	};

	const handleKeyDown = (e, id) => {
		if (e.key === "Enter") {
			const updatedItems = items.map((item) => {
				if (item.id === id) {
					item.text = e.target.value;
				}
				return item;
			});
			setItems(updatedItems);
			setEditableItemId(null);
		} else if (e.key === "Backspace" || e.key === "Delete") {
			e.preventDefault();
			const updatedItems = items.map((item) => {
				if (item.id === id) {
					item.text = e.target.value.slice(0, -1);
				}
				return item;
			});
			setItems(updatedItems);
		} else {
			// 다른 키 이벤트에 대해서는 모달을 닫지 않도록 설정
			e.preventDefault();
			e.stopPropagation();
		}
	};

	const handleAddInput = () => {
		if (items.length + inputs.length < 5) {
			const newInputText = text;
			if (newInputText) {
				// 입력 필드에 텍스트가 입력되어 있다면 새로운 아이템으로 추가
				const newItem = { id: items.length + 1, text: newInputText };
				setItems([...items, newItem]);
			}
	
			// 입력 필드 초기화
			setText("");
	
			const newIndex = items.length + inputs.length + 1; // 고유한 인덱스 생성
			const newInput = (
				<input
					type="text"
					name={`input_${newIndex}`} // 고유한 name 생성
					value={text}
					onChange={(e) => setText(e.target.value)}
					onKeyDown={(e) => handleKeyDown(e, newIndex)} // 고유한 인덱스 전달
					placeholder="새 항목 추가"
				/>
			);
	
			// inputs 배열에 아무런 input이 없다면 새로운 input을 생성하고, 그렇지 않으면 기존의 inputs 배열에 추가
			setInputs((prevInputs) => [...prevInputs, newInput]);
			console.log(inputs); // 배열에 추가된 입력 필드를 확인
		}
	
		if (items.length + inputs.length === 4) {
			setAddButtonVisible(false);
		}
	};	
	

	// AddButton을 보이거나 숨기는 상태를 추가
	const [addButtonVisible, setAddButtonVisible] = useState(true);

	useEffect(() => {
		const $body = document.querySelector("body");
		const overflow = $body.style.overflow;
		$body.style.overflow = "hidden";
		return () => {
			$body.style.overflow = overflow
		};
	}, []);

	const handleClose = () => {
    // 모달을 닫기만 함
    onClose?.();
  };

	const handleSubmit = () => {
		// 수정된 데이터를 MypageHome.js로 전달
    onClose?.(items);
	};


	return (
		<S.AppWrap>
			<S.Overlay>
				<S.ModalContainer>
					<S.ModalWrap>
						<S.Header>
							<S.ModalTitle>
								<h1>내 운동 목록</h1>
								<S.CloseButton onClick={handleClose}>
									<img src={x} alt="닫기 버튼" />
								</S.CloseButton>
							</S.ModalTitle>
							<span>이름을 더블클릭하여 변경하세요.</span>
							<S.Contents>
								{items.map((data) => {
									return (
										<div key={data.id}>
											{editableItemId === data.id ? (
												<input
													type="text"
													name={data.text}
													value={data.text}
													onChange={(e) => handleChange(e, data.id)}
													onKeyDown={(e) => handleKeyDown(e, data.id)}
												/>
											) : (
												<p onDoubleClick={() => handleDoubleClick(data.id)}>
													{data.text}
												</p>
											)}
											<img src={trash} alt="삭제 버튼" />
										</div>
									);
								})}
								{inputs.map((input, index) => (
                    <div key={index}>
											{input}
											<img src={trash} alt="삭제 버튼" />
										</div>
                ))}
							</S.Contents>
							{addButtonVisible && (
							<S.AddButton onClick={handleAddInput}>
								<img src={plus} alt="목록 추가 버튼" />
							</S.AddButton>
							)}
						</S.Header>
						<BigButton handleSubmit={handleSubmit}>수정 완료</BigButton>
					</S.ModalWrap>
				</S.ModalContainer>
			</S.Overlay>
		</S.AppWrap>
	);
}

export default FixModal;
// 편집 모달

import React, { useState, useEffect, useRef } from "react";
import * as S from "./StyledFixModal";
import x from "../../../../assets/images/X_Icon.svg";
import trash from "../../../../assets/images/Trash_Icon.svg";
import plus from "../../../../assets/images/Plus_Icon.svg";
import { BigButton } from "../../../../components/index";
import { DUMMY_DATA } from '../MypageHome';
import OutSideClick from "../../../../components/Navbar/OutSideClick";

function FixModal({ data, onUpdateData, onClose, onDeleteItem }) {

	const [items, setItems] = useState([...DUMMY_DATA]); // DUMMY_DATA를 복사하여 초기화

	const [text, setText] = useState();
	const [editableItemId, setEditableItemId] = useState(null); // 수정 중인 항목의 ID를 관리

	const [inputs, setInputs] = useState([]); // 입력 필드 목록

  const [items, setItems] = useState(DUMMY_DATA);

	const handleChange = (e, id) => {
		const updatedItems = items.map((item) => {
			if (item.id === id) {
				item.text = e.target.value; // 해당 항목의 text 값을 변경
			}
			console.log(item);
			return item;
		});

		// text 상태 업데이트
		const newText = e.target.value;
		setText(newText);

		setItems(updatedItems);
	};

	const handleKeyPress = (e, id) => {
		// Enter 키가 아닌 경우에만 텍스트 업데이트
		if (e.key !== "Enter") {
			const updatedItems = items.map((item) => {
				if (item.id === id) {
					item.text = e.target.value;
				}
				return item;
			});
			setItems(updatedItems);
		}
	};

	const handleAddInput = (e) => {
		if (e.key === "Enter" || e.key === undefined) {
			if (items.length + inputs.length < 5) {
				const newInputText = text;

				if (newInputText) {
					const newItem = {
						id: items.length + inputs.length + 1, // 새로운 아이템의 ID를 정확히 설정
						text: newInputText
					};

					// 기존 아이템과 새로운 아이템을 합친 새로운 배열을 제작
					const updatedItems = [...items, newItem];

					// items 상태를 업데이트합니다.
					setItems(updatedItems);

					// 입력이 완료된 후에 text 상태를 초기화
					setText("");

					
				}

				const newIndex = items.length + inputs.length + 1;
				console.log(newIndex);
				const newInput = (
					<div key={newIndex} className="contents-input">
						<input
							type="text"
							name={`input_${newIndex}`}
							value={text}
							onChange={(e) => handleChange(e, newIndex)}
							onKeyDown={(e) => handleKeyPress(e, newIndex)}
							placeholder="새 항목 추가"
						/>
						<img
							src={trash}
							alt="삭제 버튼"
							onClick={() => handleRemoveInput(newIndex)}
						/>
					</div>
				);

				// 새로운 input을 inputs 상태에 추가합니다.
				setInputs((prevInputs) => [...prevInputs, newInput]);
				console.log(inputs)

				if (items.length + inputs.length === 4) {
					setAddButtonVisible(false);
				}
			}
		}
	};




	// AddButton을 보이거나 숨기는 상태를 추가
	const [addButtonVisible, setAddButtonVisible] = useState(true);

	const handleRemoveInput = (id) => {
		// 입력 필드를 삭제하고 items 배열에서도 해당 아이템을 제거
		const updatedInputs = inputs.filter((input) => input.key !== id);
		setInputs(updatedInputs);

		const deletedItemId = id; // 삭제된 항목의 ID 저장

		const updatedItems = items.filter((item) => item.id !== id);
		setItems(updatedItems);

		if (items.length + updatedInputs.length < 4) {
			setAddButtonVisible(true);
		}

		// 삭제된 항목의 ID를 Mypagehome으로 전달
		onDeleteItem?.(deletedItemId);
	};


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
	const modalRef = useRef(null);
	OutSideClick(modalRef, handleClose);

	const handleSubmit = () => {
		if (text) { // text에 값이 있는 경우에만 추가
			const newIndex = data.length; // 현재 데이터의 길이를 사용하여 ID 설정
			const newItem = {
				id: newIndex, // 아이템 ID 설정
				text: text
			};
	
			// 기존 아이템과 새로운 아이템을 합친 새로운 배열을 제작
			const updatedData = [...data, newItem];
	
			// 데이터 상태를 업데이트합니다.
			onUpdateData(updatedData);
	
			// 입력이 완료된 후에 text 상태를 초기화
			setText("");

		}
		onClose?.(); // 모달 닫기 (입력과 상관없이 항상 모달을 닫도록 이동)
	};

  const handleAddItem = () => {
    if (text.trim() !== "") {
      setItems([...items, { id: Date.now(), text: text }]);
      setText(""); // 입력 필드 초기화
    }
  };


	return (
		<S.AppWrap>
			<S.Overlay>
				<S.ModalContainer ref={modalRef}>
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
								{data.map((item) => (
									<div className="contents-input" key={item.id}>
										{editableItemId === item.id ? (
											<input
												type="text"
												value={item.text}
												onChange={(e) => {
													const updatedData = data.map((dataItem) => {
														if (dataItem.id === item.id) {
															dataItem.text = e.target.value;
														}
														return dataItem;
													});
													onUpdateData(updatedData);
												}}
												onBlur={() => setEditableItemId(null)}
											/>
										) : (
											<p onDoubleClick={() => handleDoubleClick(item.id)}>{item.text}</p>
										)}
										<img
											src={trash}
											alt="삭제 버튼"
											onClick={() => handleRemoveInput(item.id)} />
									</div>
								))}
								{inputs.map((input, index) => (
									<div key={index}>
										{input}
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

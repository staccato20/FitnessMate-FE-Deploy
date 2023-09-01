// 내 운동 페이지

import * as S from "./StyledMypageHome";
import "./style.css";
import ToggleSwitch from "./toggle";
import { useState } from 'react';


// 루틴 목록용 더미데이터 

export const DUMMY_DATA = [
	{
	id: 1,
	text: '분할 1',
	name: 'first',
	},
	{
	id: 2,
	text: '분할 2',
	name: 'second',
	},

];


const Mypagehome = () => {

	// Toggle

	const [visible, setVisible] = useState(false);

	const labels = {
		left: {
			title: "내 운동",
			value: "workout"
		},
		right: {
			title: "내 보조제",
			value: "supplement"
		},
	};

	const onChange = () => {
		setVisible(!visible);
	};


	return (
		<S.HomeContainer>
			<S.HomeContent>
				<S.FirstContent>
					<S.FirstContent>
						<div className="firstTop">나에게 핏한</div>
						<div className="firstMiddle">
							<p>운동 정보를 찾아보세요.</p>
						</div>
						<S.Toggle>
							<div class="toggleSwitch_wrap">
								<div class="toggleSwitch">
									<ToggleSwitch labels={labels} onChange={onChange} />
								</div>
							</div>
						</S.Toggle>
					</S.FirstContent>
				</S.FirstContent>
			</S.HomeContent>
			<S.HomeContent class="content">
				{(visible ?
					<S.SecondContent onChange={onChange}>
						<S.ContentsTitle>
							<div className="contents-title">내 보조제</div>
						</S.ContentsTitle>
					</S.SecondContent>
					:
					<S.SecondContent onChange={onChange}>
						<S.ContentsTitle>
							<div className="contents-title">운동</div>
						</S.ContentsTitle>
					</S.SecondContent>
				)}
			</S.HomeContent>
		</S.HomeContainer>
	);
};


export default Mypagehome;

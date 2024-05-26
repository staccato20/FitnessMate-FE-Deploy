const GetProfileStatus = (
	name,
	isFocused,
	valueHistory,
	isValidState,
	children
) => {
	// 이메일 인증을 한 경우
	const Available = (
		<span className="profileInputChecking">사용 가능한 이메일입니다</span>
	)

	// 이메일 인증을 하지 않은 경우
	const NotCodeAvailable = (
		<span className="profileInputWarning">이메일 인증을 해주세요</span>
	)

	// 규칙이 맞지 않은 경우
	let NotAvailable = ""
	if (name === "weight" || name === "height") {
		NotAvailable = (
			<span className="profileInputWarning">
				{children}를 다시 입력해주세요
			</span>
		)
	} else {
		NotAvailable = (
			<span className="profileInputWarning">
				{children}을 다시 입력해주세요
			</span>
		)
	}

	if (isFocused || valueHistory) {
		return ""
	}
	if (!isValidState[name][1]) {
		return NotAvailable
	}

	if (name !== "loginEmail") {
		return ""
	}

	if (isValidState.emailModal[1]) {
		return Available
	}

	return NotCodeAvailable
}
export default GetProfileStatus

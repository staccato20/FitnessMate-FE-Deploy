export const REGISTER_OPTIONS = {
	USER_NAME: {
		required: "아이디는 필수 입력입니다.",
		pattern: {
			value: /^[가-힣]{2,10}$/,
			message: "유효하지 않은 아이디입니다.",
		},
	},

	BIRTH_DATE: {
		required: "생년월일은 필수 입력입니다.",
		pattern: {
			value: /^\d{4}-\d{2}-\d{2}$/,
			message: "유효하지 않은 생년월일입니다.",
		},
	},

	EMAIL: {
		required: "이메일은 필수 입력입니다.",
		pattern: {
			value: /^(.+)@(\S+)$/,
			message: "유효하지 않은 이메일입니다.",
		},
	},

	PASSWORD: {
		required: "비밀번호는 필수 입력입니다.",
		pattern: {
			value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/,
			message: "유효하지 않은 비밀번호 입니다.",
		},
	},

	PASSWORD_CHECK: {
		required: "비밀번호 확인은 필수 입력입니다.",
		pattern: {
			message: "비밀번호가 일치하지 않습니다.",
		},
	},
}

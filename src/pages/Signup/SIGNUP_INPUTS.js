export const SIGNUP_INPUTS = {
	userName: {
		attributes: {
			placeholder: "2자리 이상",
		},
		validate: {
			required: {value: true, message: "이름은 필수 입력입니다."},
			pattern: {
				value: /^[가-힣]{2,10}$/,
				message: "유효하지 않은 아이디입니다.",
			},
		},
	},
	birthDate: {
		attributes: {
			placeholder: "YYYY-MM-DD",
		},
		validate: {
			required: {value: true, message: "생년월일은 필수 입력입니다."},
			pattern: {
				value: /^\d{4}-\d{2}-\d{2}$/,
				message: "유효하지 않은 생년월일입니다.",
			},
		},
	},
	email: {
		attributes: {
			placeholder: "이메일을 입력해주세요",
		},
		validate: {
			required: {value: true, message: "이메일은 필수 입력입니다."},
			pattern: {
				value: /^(.+)@(\S+)$/,
				message: "유효하지 않은 이메일입니다.",
			},
		},
	},
	password: {
		attributes: {
			placeholder: "8자리 이상 영문, 숫자 조합",
		},
		validate: {
			required: "비밀번호는 필수 입력입니다.",
			pattern: {
				value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/,
				message: "유효하지 않은 비밀번호 입니다.",
			},
		},
	},
	passwordCheck: {
		attributes: {
			placeholder: "비밀번호 확인",
		},
		validate: {
			required: "비밀번호 확인은 필수 입력입니다.",
			matchPassword: (value, getValues) => {
				return (
					value === getValues("password") || "비밀번호가 일치하지 않습니다."
				)
			},
		},
	},
	height: {
		attributes: {
			placeholder: "숫자만 입력",
		},
		validate: {
			required: "키는 필수 입력입니다.",
			pattern: {
				value: /^\d{3}$/,
				message: "키는 세자리로만 입력이 가능합니다.",
			},
		},
	},
	weight: {
		attributes: {
			placeholder: "숫자만 입력",
		},
		validate: {
			required: "몸무게는 필수 입력입니다.",
			pattern: {
				value: /^\d{2,3}$/,
				message: "몸무게는 두,세자리까지만 입력이 가능합니다.",
			},
		},
	},
	bodyFat: {
		validate: {required: true, valueAsNumber: true},
	},
	muscleMass: {
		validate: {required: true, valueAsNumber: true},
	},
}

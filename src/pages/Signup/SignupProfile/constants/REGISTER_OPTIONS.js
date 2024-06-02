export const REGISTER_OPTIONS = {
	USER_NAME: {
		name: "userName",
		rules: {
			required: "아이디는 필수 입력입니다.",
			pattern: {
				value: /^[가-힣]{2,10}$/,
				message: "유효하지 않은 아이디입니다.",
			},
		},
	},

	BIRTH_DATE: {
		name: "birthDate",
		rules: {
			required: "생년월일은 필수 입력입니다.",
			pattern: {
				value: /^\d{4}-\d{2}-\d{2}$/,
				message: "유효하지 않은 생년월일입니다.",
			},
		},
	},

	EMAIL: {
		name: "email",
		rules: {
			required: "이메일은 필수 입력입니다.",
			pattern: {
				value: /^(.+)@(\S+)$/,
				message: "유효하지 않은 이메일입니다.",
			},
		},
	},

	PASSWORD: {
		name: "password",
		rules: {
			required: "비밀번호는 필수 입력입니다.",
			pattern: {
				value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/,
				message: "유효하지 않은 비밀번호 입니다.",
			},
		},
	},

	PASSWORD_CHECK: {
		name: "passwordCheck",
		rules: {
			required: "비밀번호 확인은 필수 입력입니다.",
			pattern: {
				message: "비밀번호가 일치하지 않습니다.",
			},
		},
	},

	HEIGHT: {
		name: "height",
		rules: {
			required: "키는 필수 입력입니다.",
			pattern: {
				value: /^\d{3}$/,
				message: "키는 세자리로만 입력이 가능합니다.",
			},
		},
	},

	WEIGHT: {
		name: "weight",
		rules: {
			required: "몸무게는 필수 입력입니다.",
			pattern: {
				value: /^\d{2,3}$/,
				message: "몸무게는 두,세자리까지만 입력이 가능합니다.",
			},
		},
	},

	BODY_FAT: {
		name: "bodyFat",
		rules: {
			required: true,
		},
	},

	MUSCLE_MASS: {
		name: "muscleMass",
		rules: {
			required: true,
		},
	},
}

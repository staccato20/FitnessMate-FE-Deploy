const FixBodyInfo = () => {
  // const navigate = useNavigate()

  // const [isValidState, setIsValidState] = useRecoilState(validationState)

  // const handleBackPage = (e) => {
  // 	e.preventDefault()
  // 	navigate(-1)
  // }

  // const [userName, setuserName] = useState(null)
  // const [height, setHeight] = useState(null)
  // const [weight, setWeight] = useState(null)
  // const [bodyFat, setBodyFat] = useState(null)
  // const [muscleMass, setMuscleMass] = useState(null)
  // const [upDownBalance, setUpDownBalance] = useState(null)

  // const fetchData = async () => {
  // 	try {
  // 		const response_private = await TokenApi.get("user/private")
  // 		setuserName(response_private.data.userName)
  // 		const response_body = await TokenApi.get("bodyData/recent")
  // 		console.log(response_body)
  // 		setHeight(response_body.data.height)
  // 		setWeight(response_body.data.weight)
  // 		setBodyFat(response_body.data.bodyFat)
  // 		setMuscleMass(response_body.data.muscleMass)
  // 		setUpDownBalance(response_body.data.upDownBalance)
  // 	} catch (error) {
  // 		console.log(error)
  // 	}
  // }

  // useEffect(() => {
  // 	fetchData()
  // }, [])

  // // bodyinfo

  // const currenturl = window.location.pathname
  // const [isCategorySelect, setIsCategorySelect] = useState(false)

  // const [rangeValue, setRangeValue] = useState(5)
  // const [rangeText, setRangeText] = useState("둘 다 발달했거나 큰 차이 없어요")

  // const prcieRangeValueHandler = (e) => {
  // 	setRangeValue(parseInt(e.target.value))

  // 	setRangeText(handleBalanceText(e.target.value))
  // 	setIsValidState((pre) => ({
  // 		...pre,
  // 		upDownBalance: [e.target.value / 10, true],
  // 	}))
  // }

  // useEffect(() => {
  // 	setRangeValue(upDownBalance * 10) // 기본값으로 사용자의 upDownBalance를 사용
  // 	setIsValidState((pre) => ({
  // 		...pre,
  // 		upDownBalance: [upDownBalance || 5 / 10, true],
  // 	}))
  // }, [upDownBalance])

  // const handleBalanceText = (value) => {
  // 	const rangevalue = Number(value)
  // 	if (rangevalue >= 1 && rangevalue <= 4) {
  // 		return "하체가 상체보다 더 발달했어요"
  // 	} else if (rangevalue === 5) {
  // 		return "둘 다 발달했거나 큰 차이 없어요"
  // 	} else if (rangevalue >= 6 && rangevalue <= 9) {
  // 		return "상체가 하체보다 더 발달했어요"
  // 	}
  // }

  // // 입력했는지 체크(한 번 입력한 순간 쭉 true)
  // const [valueHistory, setValueHistory] = useState(false)

  // const handleChange = (e) => {
  // 	const name = e.target.name

  // 	if (name === "height") {
  // 		setHeight(e.target.value)
  // 	} else if (name === "weight") {
  // 		setWeight(e.target.value)
  // 	} else if (name === "muscleMass") {
  // 		setMuscleMass(e.target.value)
  // 	} else if (name === "bodyFat") {
  // 		setBodyFat(e.target.value)
  // 	}
  // 	if (!valueHistory) {
  // 		setValueHistory(true)
  // 	}
  // }

  // // 제출
  // const handleSubmit = async (e) => {
  // 	e.preventDefault()

  // 	const formData = {
  // 		date: new Date(),
  // 		height: height,
  // 		weight: weight,
  // 		bodyFat: bodyFat,
  // 		muscleMass: muscleMass,
  // 		upDownBalance: rangeValue / 10,
  // 	}
  // 	console.log("정보:", formData)

  // 	try {
  // 		// API 호출 및 form 데이터 전송
  // 		const res = await TokenApi.post("bodyData", formData)
  // 		console.log("수정:", res.status)
  // 		window.location.replace("fixbodyinfo")
  // 	} catch (error) {
  // 		console.log(error)
  // 		alert("수정 실패. 형식을 준수해주세요.")
  // 	}
  // }

  return <div>gg</div>
}

export default FixBodyInfo

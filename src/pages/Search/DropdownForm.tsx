import { FormProvider, UseFormReturn } from "react-hook-form"

import Chip from "@components/Chip/Chip"
import IconButton from "@components/IconButton/IconButton"
import SearchField from "@components/SearchField/SearchField"

import { SearchTypes } from "@typpes/type"

import { animation } from "@styles/theme"

import * as S from "./StyledSearch"

interface DropdownFormProps {
  methods: UseFormReturn<SearchTypes>
  handleSearch: ({ search }: SearchTypes) => void
  handleToggle: () => void
}

const DropdownForm = ({
  methods,
  handleSearch,
  handleToggle,
}: DropdownFormProps) => {
  const handleClickKeyword = (keyword: string) => {
    methods.setValue("search", keyword)
  }

  const triggerSubmit = () => {
    methods.handleSubmit(handleSearch)()
  }

  return (
    <S.DropdownFormWrapper
      initial={{ opacity: 0, height: 0 }} // 초기 상태: 투명하고 높이 0
      animate={{ opacity: 1, height: "428px" }} // 나타날 때: 높이가 점점 커지면서 나타남
      exit={{ opacity: 0, height: 0 }} // 사라질 때: 높이가 0으로 줄어들면서 사라짐
      transition={{ duration: 0.4, ease: "easeInOut" }} // 애니메이션 지속 시간 및 이징 설정
      layout // 레이아웃을 변경하면서 부드럽게 애니메이션 적용
      style={{ overflow: "hidden" }} // 높이가 줄어들 때 콘텐츠가 잘리도록 설정을 absolute로 설정하여 애니메이션 시 레이아웃에 영향 없음
      onSubmit={methods.handleSubmit(handleSearch)}>
      <S.DropDownBox>
        <IconButton
          icon="CloseBold"
          className="close"
          onClick={handleToggle}
        />
        <FormProvider {...methods}>
          <SearchField
            triggerSubmit={triggerSubmit}
            name="search"
            placeholder="어떤 운동이 좋을까요?"
            width="100%"
          />
        </FormProvider>
        <S.DropDownKeywordWrapper>
          <S.DropDownKeywordTitle>추천 검색 키워드</S.DropDownKeywordTitle>
          <S.DropDownKeywordList>
            {["데드 리프트", "풀업", "스쿼트", "인클라인 덤벨 프레스"].map(
              (word) => (
                <Chip
                  key={word}
                  onClick={() => handleClickKeyword(word)}>
                  {word}
                </Chip>
              ),
            )}
          </S.DropDownKeywordList>
        </S.DropDownKeywordWrapper>
      </S.DropDownBox>
    </S.DropdownFormWrapper>
  )
}

export default DropdownForm

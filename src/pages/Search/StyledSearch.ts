import styled from "styled-components"

export const SearchWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 82px;
  padding-top: 62px;
`

export const SearchContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 52px;
  align-items: center;
  padding: 0 20px;
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  max-width: 1032px;
  width: 100%;
`
export const Title = styled.span`
  color: var(--Gray50, #6b7684);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`
export const SubTitle = styled.span`
  color: var(--Black, #191f28);
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.6px;
`

export const TabsWrapper = styled.div`
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  padding: 9px calc(50% - 1042px);
  border: 1px solid var(--Neutral-200, #f2f4f6);
  background: var(--Neutral-100, #f9fafb);
`

export const SearchBar = styled.button`
  border-radius: 37px;
  border: 1px solid var(--Neutral-500, #a2b2c2);
  background: var(--Neutral-0, #fff);
  display: flex;
  padding: 10px 16px;
  justify-content: center;
  gap: 6px;
  color: var(--Neutral-500, #a2b2c2);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`
export const CardWrapper = styled.div``
export const CardTitle = styled.span``
export const CardList = styled.ul``
export const PaginationWrapper = styled.div``
export const PaginationList = styled.ul``

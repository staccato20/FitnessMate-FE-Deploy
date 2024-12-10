import styled from "styled-components"

import theme, { fonts } from "@styles/theme"

export const BodyPartWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const TabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
`

export const TabTitle = styled.div`
  color: ${theme.Netural800};
  ${fonts.b3};
`

export const TabList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
`

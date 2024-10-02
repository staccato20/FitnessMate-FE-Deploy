import {
  FooterInner,
  FooterSubText,
  FooterText,
  FooterTopLine,
  FooterWrapper,
} from "@components/Footer/StyledFooter"

import { StrictPropsWithChildren } from "@typpes/type"

interface FooterProps {
  flex?: string
}

const Footer = ({
  children,
  flex = "center",
}: StrictPropsWithChildren<FooterProps>) => {
  return (
    <FooterWrapper $flex={flex}>
      <FooterInner>{children}</FooterInner>

      <FooterTopLine>{}</FooterTopLine>
    </FooterWrapper>
  )
}

Footer.Text = FooterText
Footer.SubText = FooterSubText

export default Footer

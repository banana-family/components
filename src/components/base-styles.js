import styled from 'styled-components/native'
import { fontSizes, lineHeights, colors, fonts } from '../variables'

const BaseStyles = styled.View`
  font-family: ${fonts.default};
  font-size: ${fontSizes.md}px;
  line-height: ${lineHeights.md}px;
  color: ${colors.body};
`

export default BaseStyles

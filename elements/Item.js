import styled from 'styled-components'
import { media } from '../utils/breakpoints';

const Item = styled.span`

  ${media.mobile`
    display: block;
  `}

`

export default Item
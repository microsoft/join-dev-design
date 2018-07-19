import styled from 'styled-components'
import { media } from '../utils/breakpoints'

const Footer = styled.footer`


font-size: 80%;
text-align: left;
padding: 1rem 0;

${media.mobile`
  text-align: unset;
  /* padding: 1rem 0; */
`}
  

`

export default Footer
import styled from 'styled-components'
import { media } from '../utils/breakpoints';

const Container = styled.div`

max-width: 32rem;
margin: 0 auto;
flex: 1;
min-height: 100vh;
display: flex;
justify-content: center;
flex-direction: column;

${media.mobile`
  padding-left: 1rem;
  padding-right: 1rem;
`}


`

export default Container
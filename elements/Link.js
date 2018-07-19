import styled from 'styled-components'

import is from 'styled-is'

const Link = styled.a`

color: var(--green);
text-decoration: none;
transition: 150 ms color;

&:hover{
  color: var(--green);
}

${is('logoLink')`
  display: block;
  width: 4rem;
  height: 4rem;
  margin: 2.5rem auto;
`}
  

`

export default Link
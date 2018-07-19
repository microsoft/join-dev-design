import styled from 'styled-components'

const H1 = styled.h1`

  font-size: 1.25rem;
  line-height: 1.5;
  text-align: left;
  position: relative;

  &:after{
    content: '';
    position: absolute;
    bottom: -1.5rem;
    left: 0;
    right: 0;
    width: 25%;
    height: 1px;
    background: rgba(255,255,255,.2);

    
  }

`

export default H1
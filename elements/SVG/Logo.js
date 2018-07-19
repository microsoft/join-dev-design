import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'


export class Logo extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <svg width={112} height={112} fill="none">
        <Path d="M53.831 4.337H4.337v49.494h49.494V4.337z" fill="#F35325" />
        <Path
          d="M107.663 4.337H58.169v49.494h49.494V4.337z"
          fill="#81BC06"
        />
        <Path
          d="M53.831 58.169H4.337v49.494h49.494V58.169z"
          fill="#05A6F0"
        />
        <Path
          d="M107.663 58.169H58.169v49.494h49.494V58.169z"
          fill="#FFBA08"
        />
      </svg>
    )
  }
}



const pushPull1 = keyframes`

  0% {
    transform: translate(-.25rem, -.25rem);
  }
  50% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-.25rem, -.25rem);
  }

`

const pushPull2 = keyframes`

0% {
    transform: translate(.25rem, -.25rem);
  }
  50% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(.25rem, -.25rem);
  }

`

const pushPull3 = keyframes`

  0% {
    transform: translate(-.25rem, .25rem);
  }
  50% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-.25rem, .25rem);
  }

`

const pushPull4 = keyframes`

  0% {
    transform: translate(.25rem, .25rem);
  }
  50% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(.25rem, .25rem);
  }

`



const Path = styled.path`

  &:first-child{
    animation: ${pushPull1} 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
    animation-delay: .1s;
  }

  &:nth-child(2){
    animation: ${pushPull2} 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
    animation-delay: .3s;
  }

  &:nth-child(3){
    animation: ${pushPull3} 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
    animation-delay: .7s;
  }

  &:last-child{
    animation: ${pushPull4} 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
    animation-delay: .5s;
  }


`


// Libraries
import React, { Component } from 'react'

import {
  Container,
  Header,
  Link,
  Image,
  Text,
  Item,
  Main,
  Footer,
  H1
} from '../elements'

import { Logo } from '../elements/SVG/Logo'

export default class Index extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return (
      <Container>
        <Header>

          <Image>
            <Link href='https://microsoft.com'>
              <Logo />
            </Link>
          </Image>

          <H1>Microsoft is looking for designers who code to help create the most compelling developer tools &amp; services
                on the planet.</H1>
        </Header>
        <Main>
          <Text>
            We have open positions for technical product designers &amp; design leaders in San Francisco, Seattle, and elsewhere.
            </Text>
          <Text>
            We use PCs, Macs, Figma, Sketch, GitHub, JavaScript, ZEIT, and other modern tools to design, prototype, and build
                the future of software development.
          </Text>
          <Text>
            We believe in diversity, openness, and building delightful tools that empower every person and organization to
                achieve more.
          </Text>
          <Text>
            Interested? Send a PR with any improvement to <Link href="https://github.com/Microsoft/join-dev-design">microsoft/join-dev-design</Link> or <Link href="mailto:dasiege@microsoft.com">email us</Link>.
          </Text>
        </Main>

        <Footer>
          <Item>
            Designed in <Link href="https://figma.com">Figma</Link>. </Item>
          <Item>Built in <Link href="https://code.visualstudio.com">Code</Link>. </Item>
          <Item>
            Open source on <Link href="https://github.com/Microsoft/join-dev-design">GitHub</Link>.
        </Item>
        </Footer>

      </Container>

    )
  }
}

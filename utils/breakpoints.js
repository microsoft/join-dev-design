import { mediaQuery } from './styled-media-queries'

const breakpoint = {
  mobile: 40,

}

export const media = {
  mobile: mediaQuery(`(max-width: ${breakpoint.mobile}em)`)
}

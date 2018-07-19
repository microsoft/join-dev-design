import { css } from 'styled-components'

/**
 * For the specified media query, returns a tag function that can be used to
 * automatically wrap the tagged template literal in its media query.
 *
 * @param {string} query The string or template literal containing the media
 *   query features.
 */


const mediaQuery = (...query) => (...rules) => css`

  @media ${css`${query}`} {
    ${css`${rules}`};
  }
`;
export { mediaQuery }

import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import '../utils/globals'

const page = {
  index: {
    title: 'Join Microsoft Developer Design',
    description: '',
    url: '',
    keywords: '',
    facebookShare: '/static/images/meta/share.png',
    twitterShare: '/static/images/meta/share.png',
    favicon: {
      ico: 'https://c.s-microsoft.com/favicon.ico?v2'
    }
  }
}

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }


  componentDidMount() {
    document.documentElement.className = 'js'
  }

  render() {
    return (
      <html>
        <Head>
          <title>{page.index.title}</title>

          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta content="width=device-width" name="viewport" />
          <meta content="yes" name="apple-mobile-web-app-capable" />
          <meta content="yes" name="apple-touch-fullscreen" />

          <link rel="icon" href={page.index.favicon.ico} type="image/x-icon" />
          <link rel="shortcut icon" href={page.index.favicon.ico} />


          {/* Google content */}
          <meta content={page.index.title} name="application-name" />
          <meta content={page.index.description} name="description" />
          <meta content={page.index.title} name="author" />
          <meta content={page.index.keywords} name="keywords" />
          <meta content={new Date().getFullYear()} name="copyright" />


          <link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet" />

          {this.props.styleTags}

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

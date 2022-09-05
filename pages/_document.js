import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html data-theme="night">
      <Head>
        <link id="heading-font" rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800;900&display=swap" media="all" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

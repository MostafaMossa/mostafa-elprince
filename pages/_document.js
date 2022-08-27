import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Tangerine" />
      </Head>
      <body className='bg-gray-700 h-screen w-full md:flex lg:flex'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

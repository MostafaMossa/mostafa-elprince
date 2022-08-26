import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Tangerine" />
      </Head>      
      <body className='bg-gray-700'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

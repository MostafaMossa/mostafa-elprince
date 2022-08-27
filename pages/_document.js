import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />     
      <body className='bg-gray-700 h-screen w-full md:flex lg:flex'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

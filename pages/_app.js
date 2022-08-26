import LayoutPc from '../layouts/LayoutPc'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <LayoutPc>
        <Component {...pageProps} />
      </LayoutPc>
    </>
  )
}

export default MyApp

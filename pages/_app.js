import { isBrowser, isMobile } from 'react-device-detect'
import LayoutPc from '../layouts/LayoutPc'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  if (isMobile) {
    return (
      <>
        <Component {...pageProps} />
      </>
    )
  } else if (isBrowser) {
    return (
      <>
        <LayoutPc>
          <Component {...pageProps} />
        </LayoutPc>
      </>
    )
  }
}

export default MyApp

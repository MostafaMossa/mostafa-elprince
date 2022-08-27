import LayoutPc from '../layouts/Layout';
import '../styles/globals.css'


const MyApp = ({ Component, propPage }) => {
  return (
    <LayoutPc>
      <Component {...propPage} />
    </LayoutPc>
  )
}

export default MyApp;
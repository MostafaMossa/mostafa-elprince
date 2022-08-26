import { useEffect, useState } from 'react';
import { isBrowser, isMobile } from 'react-device-detect';
import LayoutMobile from '../layouts/LayoutMobile';
import LayoutPc from '../layouts/LayoutPc';
import '../styles/globals.css'


const MyApp = ({ Component, propPage }) => {

  if (isBrowser) {
    return (
      <>
        <LayoutPc>
          <Component {...propPage} />
        </LayoutPc>
      </>
    );
  }

  if (isMobile) {
    <LayoutMobile>
      <Component {...propPage} />
    </LayoutMobile>
  }
}

export default MyApp;
import React, { FC, ReactElement } from 'react';
import './index.scss'

const Banner:FC = ():ReactElement => {

  return (
    <div id="note-banner">
      <img src='http://blog-oss.kbm.ink/114939.jpg' alt="benming" />
      {/* <p id="note-banner-tit">Benming</p> */}
    </div>
  );
}

export default Banner;

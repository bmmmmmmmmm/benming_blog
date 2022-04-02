import React, { FC, ReactElement } from 'react';
import bg from '../../../assets/images/bg.png'
import './index.scss'

const Banner:FC = ():ReactElement => {
  return (
    <div id="note-banner">
      <img src={bg} alt="benming" />
      {/* <p id="note-banner-tit">Benming</p> */}
    </div>
  );
}

export default Banner;
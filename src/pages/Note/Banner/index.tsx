import React, { FC, ReactElement } from 'react';
// import bg from '../../../assets/images/bg.png'
// import bg1 from '../../../assets/images/bg1.png'
// import bg2 from '../../../assets/images/bg2.png'
// import bg3 from '../../../assets/images/bg3.png'
import './index.scss'

const Banner:FC = ():ReactElement => {

  return (
    <div id="note-banner">
      {/* <img src='https://tva1.sinaimg.cn/large/e6c9d24ely1h14vclcenuj23400s019x.jpg' alt="benming" /> */}
      <img src='https://tva1.sinaimg.cn/large/e6c9d24ely1h16ut2c5e7j22n20nsdw8.jpg' alt="benming" />
      {/* <p id="note-banner-tit">Benming</p> */}
    </div>
  );
}

export default Banner;
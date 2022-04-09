import React, { FC, ReactElement } from 'react';
import './index.scss'

const NotPC:FC = ():ReactElement => {
  return (
    <div id='notPC'>
      该网站暂不支持移动设备，请使用PC端浏览器打开。
    </div>
  );
}

export default NotPC;

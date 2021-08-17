import React, { FC, ReactElement } from 'react';
import './index.scss'

const AboutMe:FC = ():ReactElement => {
  return (
    <div id="note-content-aboutme">
      <div id="note-content-aboutme-img"></div>
      <div id="note-content-aboutme-name">本明</div>
      <div id="note-content-aboutme-total">
        <div id="note-content-aboutme-article">文章<br />12</div>
        <div id="note-content-aboutme-tag">标签<br />2</div>
      </div>
      <div id="note-content-aboutme-btn"></div>
      <div id="note-content-aboutme-relate"></div>
    </div>
  );
}

export default AboutMe;
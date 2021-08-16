import React, { FC, ReactElement } from 'react';
import CItems from './CItems';
import './index.css'

const Content:FC = ():ReactElement => {
  return (
    <div id="content">
      <CItems rgb={[183,170,203]}/>
      <CItems rgb={[244,243,241]}/>
      <CItems rgb={[154,210,208]}/>
      <CItems rgb={[232,173,60]}/>
      <CItems rgb={[234,234,234]}/>
      <CItems rgb={[242,169,180]}/>
      <CItems rgb={[198,78,53]}/>
      <CItems rgb={[223,224,226]}/>
      <CItems rgb={[67,122,171]}/>
      <CItems rgb={[195,195,105]}/>
      <CItems rgb={[183,224,255]}/>
      <CItems rgb={[229,204,150]}/>
    </div>
  );
}

export default Content;

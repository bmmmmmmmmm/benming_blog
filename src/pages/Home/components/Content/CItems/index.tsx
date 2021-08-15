import React, { FC, ReactElement } from 'react';
import { RGB } from '../Typings'
import './index.scss'

const CItems:FC<RGB> = (props: RGB):ReactElement => {
  const { rgb } = props
  return (
    <div id="CItems" style={{backgroundColor:`rgb(${rgb[0]},${rgb[1]},${rgb[2]})`}}>
      <p style={{color:`rgb(${255-rgb[0]},${255-rgb[1]},${255-rgb[2]})`}}>12345</p>
    </div>
  );
}

export default CItems;

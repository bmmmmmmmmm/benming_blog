import React, { FC, MouseEventHandler, ReactElement } from 'react';
import './index.css'

const tbLeft:MouseEventHandler = ():void => {
  console.log('tbLeft');
}

const tbRight:MouseEventHandler = ():void => {
  console.log('tbRight');
}

const TopBar:FC = ():ReactElement => {
  return (
    <div id="topbar">
      <div id="topbar-left" onClick={tbLeft}>
        <svg>
          <rect id="r1"></rect>
          <rect id="r2" y="7"></rect>
          <rect id="r3" y="14"></rect>
        </svg>
      </div>
      <div id="topbar-middle">logo</div>
      <div id="topbar-right" onClick={tbRight}>
        <svg>
          <rect id="r1"></rect>
          <rect id="r2" y="7"></rect>
          <rect id="r3" y="14"></rect>
        </svg>
      </div>
    </div>
  );
}

export default TopBar;

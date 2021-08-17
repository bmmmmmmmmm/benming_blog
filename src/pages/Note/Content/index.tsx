import React, { FC, ReactElement } from 'react';
import AboutMe from './AboutMe';
import Notes from './Notes';
import Life from './Life';
import TotalTag from './TotalTag';
import './index.scss'

const Content:FC = ():ReactElement => {

  return (
    <div id="note-content">
      <Notes/>
      <div id="note-content-right">
        <AboutMe/>
        <Life/>
        <TotalTag/>
      </div>
    </div>
  );
}

export default Content;

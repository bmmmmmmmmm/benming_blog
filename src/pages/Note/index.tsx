import React, { FC, ReactElement } from 'react';
import TopBar from '../../components/TopBar';
import Banner from './Banner';
import Content from './Content';
import './index.scss'


const Note:FC = ():ReactElement => {
  return (
    <div id="note">
      <TopBar/>
      <Banner/>
      <Content/>
    </div>
  );
}

export default Note;

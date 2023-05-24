import React, { FC, ReactElement } from 'react';
import TopBar from '../../components/TopBar';
import Content from './Content';
import './index.scss'

const Hut:FC = ():ReactElement => {
  return (
    <div>
      <div id="hut-top"><TopBar/></div>
      <div id="hut-contentbox"><Content/></div>
    </div>
  );
}

export default Hut;

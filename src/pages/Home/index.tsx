import React, { FC, ReactElement } from 'react';
import TopBar from './components/TopBar';
import Content from './components/Content';
import './index.css'

const Home:FC = ():ReactElement => {
  return (
    <div>
      <div id="Home-top"><TopBar/></div>
      <div id="Home-content"><Content/></div>
    </div>
  );
}

export default Home;

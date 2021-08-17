import React, { FC, ReactElement } from 'react';
import TopBar from '../../components/TopBar';
import Content from './Content';
import './index.scss'

const Record:FC = ():ReactElement => {
  return (
    <div>
      <div id="record-top"><TopBar/></div>
      <div id="record-contentbox"><Content/></div>
    </div>
  );
}

export default Record;

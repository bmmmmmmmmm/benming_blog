import React, { FC, ReactElement } from 'react';
import './index.scss'

const NoteItems:FC = ():ReactElement => {
  return (
    <div id="note-content-notes-noteitems">
      <div id="note-content-notes-noteitems-tittle">标题</div>
      <div id="note-content-notes-noteitems-time">2021/08/17</div>
      <div id="note-content-notes-noteitems-tag">
        <div>标签</div>
        <div>标签</div>
        <div>标签</div>
      </div>
    </div>
  );
}

export default NoteItems;

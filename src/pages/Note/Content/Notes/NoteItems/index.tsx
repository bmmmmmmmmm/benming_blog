import React, { FC, ReactElement } from 'react';
import { noteItemType } from '../Typings/inswx';
import './index.scss'

const NoteItems:FC<noteItemType> = (prop: noteItemType):ReactElement => {
  const { title, createDate, tags } = prop
  return (
    <div id="note-content-notes-noteitems">
      <div id="note-content-notes-noteitems-tittle">{title}</div>
      <div id="note-content-notes-noteitems-time">{createDate}</div>
      <div id="note-content-notes-noteitems-tag">
        {
          typeof(tags)==='string'||typeof(tags)==='number' ?
          <div>{tags}</div> :
          tags.map((item)=> <div>{item}</div> )
        }
      </div>
    </div>
  );
}

export default NoteItems;

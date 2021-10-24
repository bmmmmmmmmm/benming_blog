import React, { FC, ReactElement } from 'react';
import { NoteItemType } from '../Typings/index';
import './index.scss'

const NoteItems:FC<NoteItemType> = (prop: NoteItemType):ReactElement => {
  const { title, createdAt, updatedAt, tags } = prop
  const date = new Date(createdAt)
  const createDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}` 
  return (
    <div id="note-content-notes-noteitems">
      <div id="note-content-notes-noteitems-tittle">{title ? title : "标题为空"}</div>
      <div id="note-content-notes-noteitems-modified">{createdAt === updatedAt ? '' : '已修改'}</div>
      <div id="note-content-notes-noteitems-time">{createDate}</div>
      <div id="note-content-notes-noteitems-tag">
        {
          tags ? typeof(tags)==='string'||typeof(tags)==='number' ?
          <div>{tags}</div> :
          tags!.map((item)=> <div>{item}</div> ) : <></>
        }
      </div>
    </div>
  );
}

export default NoteItems;

import React, { FC, ReactElement } from 'react';
// import { useHistory } from 'react-router-dom';
import { NoteItemType } from '../Typings/index';
import './index.scss'

const NoteItems:FC<NoteItemType> = (prop: NoteItemType):ReactElement => {
  const { _id, title, createdAt, updatedAt, tags } = prop

  // const history = useHistory()
  // const colors = ['#EFD55E', '#89D0C2', '#F77A82', '#B7AACB', '#077ABD']
  const colors = ['#B7E0FF', '#CFEADC', '#FBEDCA', '#E8EADC', '#FEDEE1']
  const getTagColor = () => {
    return colors[Math.floor(Math.random() * 5)]
  }

  const openPage = (page:string)=> {
    const href = window.location.href.slice(0,-5)
    window.open('_black')!.location.href = `${href}${page}`
  }
  const date = new Date(createdAt)
  const createDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}` 
  return (
    <div id="note-content-notes-noteitems" onClick={()=>openPage(`/inNote/${_id}`)}>
      <div id="note-content-notes-noteitems-tittle">{title ? title : "标题为空"}</div>
      <div id="note-content-notes-noteitems-modified">{createdAt === updatedAt ? '' : '已修改'}</div>
      <div id="note-content-notes-noteitems-time">{createDate}</div>
      <div id="note-content-notes-noteitems-tag">
        {
          tags ? typeof(tags)==='string'||typeof(tags)==='number' ?
          <div key={window.btoa(String(tags))} style={{backgroundColor: getTagColor()}}>{tags}</div> :
          tags!.map((item) => <div key={window.btoa(String(item))} style={{backgroundColor: getTagColor()}}>{item}</div>) : <></>
        }
      </div>
    </div>
  );
}

export default NoteItems;

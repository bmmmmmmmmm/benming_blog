import React, { FC, ReactElement } from 'react';
import NoteItems from './NoteItems';
import './index.scss'

const Notes:FC = ():ReactElement => {
  return (
    <div id="note-content-notes">
      <NoteItems title='标题' createDate='123' tags='1'/>
      <NoteItems title='标题' createDate='123' tags={1}/>
      <NoteItems title='标题' createDate='123' tags={[1,2,3]}/>
      <NoteItems title='标题' createDate='123' tags={['1','3']}/>
      <NoteItems title='标题' createDate='123' tags={['1',4]}/>
      <NoteItems title='标题' createDate='123' tags='1'/>
      <NoteItems title='标题' createDate='123' tags={1}/>
      <NoteItems title='标题' createDate='123' tags={[1,2,3]}/>
      <NoteItems title='标题' createDate='123' tags={['1','3']}/>
      <NoteItems title='标题' createDate='123' tags={['1',4]}/>      
      <NoteItems title='标题' createDate='123' tags='1'/>
      <NoteItems title='标题' createDate='123' tags={1}/>
      <NoteItems title='标题' createDate='123' tags={[1,2,3]}/>
      <NoteItems title='标题' createDate='123' tags={['1','3']}/>
      <NoteItems title='标题' createDate='123' tags={['1',4]}/>
    </div>
  );
}

export default Notes;
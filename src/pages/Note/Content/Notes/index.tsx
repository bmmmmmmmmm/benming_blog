import React, { FC, ReactElement } from 'react';
import NoteItems from './NoteItems';
import './index.scss'

const Notes:FC = ():ReactElement => {
  return (
    <div id="note-content-notes">
      <NoteItems/>
      <NoteItems/>
      <NoteItems/>
      <NoteItems/>
      <NoteItems/>
      <NoteItems/>
      <NoteItems/>
      <NoteItems/>
      <NoteItems/>
      <NoteItems/>
      <NoteItems/>
      <NoteItems/>
      <NoteItems/>
      <NoteItems/>
      <NoteItems/>
      <NoteItems/>
      <NoteItems/>
    </div>
  );
}

export default Notes;
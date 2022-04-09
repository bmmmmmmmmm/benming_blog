import React, { FC, ReactElement } from 'react';
import connect from '../../../../redux/connect';
import { createUpdateNoteAction } from '../../../../redux/actions';
import { NoteItemType } from './Typings';
import NoteItems from './NoteItems';
import './index.scss'

const Notes:FC = (props: any):ReactElement => {

  const { notes } = props;

  // 反转列表
  const rend = [];
  for(let i = notes.length-1; i >= 0; i--){
    rend.push(notes[i]);
  }

  return (
    <div id="note-content-notes">
      {
        rend.map((element: NoteItemType)=>
          <NoteItems key = {element._id} _id = {element._id} title = {element.title} createdAt = { element.createdAt } updatedAt = { element.updatedAt } tags = { element.tags } />
        )
      }
      <NoteItems _id='123' title='标题' createdAt='123' updatedAt='234' tags='1'/>
      <NoteItems _id='1234' title='标题' createdAt='123' updatedAt='234' tags={1}/>
      <NoteItems _id='1235' title='标题' createdAt='123' updatedAt='234' tags={[1,2,3]}/>
      <NoteItems _id='1236' title='标题' createdAt='123' updatedAt='234' tags={['1','3']}/>
      <NoteItems _id='1237' title='标题' createdAt='123' updatedAt='234' tags={['1',4]}/>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  notes: state.note
})

const mapDispatchToProps = (dispatch: any) => ({
  updateNote: (notes:NoteItemType[])=>dispatch(createUpdateNoteAction(notes))
})

export default connect({ mapStateToProps, mapDispatchToProps })(Notes);
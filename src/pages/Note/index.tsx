import React, { FC, ReactElement, useEffect } from 'react';
import { createUpdateNoteAction, createUpdateMyInfoAction } from '../../redux/actions';
import connect from '../../redux/connect';
import { getNotes } from '../../util/api/notes';
import { getMyInfo } from '../../util/api/myInfo';
import { NoteItemType } from './Content/Notes/Typings';
import { myInfoType } from './Content/AboutMe/typings';
import TopBar from '../../components/TopBar';
import Banner from './Banner';
import Content from './Content';
import './index.scss'


const Note:FC = (props: any):ReactElement => {

  const { updateNote, updateMyInfo } = props;
  useEffect(() => {
    const gainNotes = async ()=> {
      try {
        const result:any = await getNotes()
        if(result.data.masg === "success!")
          updateNote(result.data.data)
      } catch (error) {
        console.log(error);
      }
    }
    const gainMyInfo = async ()=> {
      try {
        const result:any = await getMyInfo()
        if(result.data.masg === "success!")
          updateMyInfo(result.data.data[0])
      } catch (error) {
        console.log(error);
      }
    }
    gainNotes();
    gainMyInfo()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <TopBar/>
      <div id="note">
        <Banner/>
        <Content/>
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  notes: state.note,
  myInfo: state.myInfo
})

const mapDispatchToProps = (dispatch: any) => ({
  updateNote: (notes:NoteItemType[])=>dispatch(createUpdateNoteAction(notes)),
  updateMyInfo: (myInfo: myInfoType)=>dispatch(createUpdateMyInfoAction(myInfo))
})

export default connect({ mapStateToProps, mapDispatchToProps })(Note);
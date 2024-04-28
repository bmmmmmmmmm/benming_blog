import React, { FC, ReactElement, useCallback, useEffect } from 'react';
import { createUpdateNoteAction, createUpdateMyInfoAction } from '../../redux/actions';
import connect from '../../redux/connect';
import { showNotes } from '../../util/api/notes';
import { getMyInfo } from '../../util/api/myInfo';
import { NoteItemType } from './Content/Notes/Typings';
import { myInfoType } from './Content/AboutMe/typings';
import TopBar from '../../components/TopBar';
import Banner from './Banner';
import Content from './Content';
// import './index.scss'
import './index2404.scss'


const Note:FC = (props: any):ReactElement => {
  const { updateNote, updateMyInfo } = props;

  const gainNotes = useCallback(async ()=> {
    try {
      const result:any = await showNotes()
      if(result.data.masg === "success!")
        updateNote(result.data.data)
    } catch (error) {
      console.error(error);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const gainMyInfo = useCallback(async ()=> {
    try {
      const result:any = await getMyInfo()
      if(result.data.masg === "success!")
        updateMyInfo(result.data.data[0])
    } catch (error) {
      console.error(error);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    console.log('===========updateNotes&Info');
    gainNotes();
    gainMyInfo()
  }, [gainMyInfo, gainNotes])

  return (
    <div>
      <TopBar/>
      <div id="note">
        {/* <Banner/> */}
        <img id="note-banner" src='http://blog-oss.kbm.ink/114939.jpg' alt="benming" />
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
  updateNote: (notes:NoteItemType[]) => dispatch(createUpdateNoteAction(notes)),
  updateMyInfo: (myInfo: myInfoType) => dispatch(createUpdateMyInfoAction(myInfo))
})

export default connect({ mapStateToProps, mapDispatchToProps })(Note);

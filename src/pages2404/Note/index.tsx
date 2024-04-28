import { createUpdateMyInfoAction, createUpdateNoteAction } from '../../redux/actions';
import { myInfoType } from '../../pages/Note/Content/AboutMe/typings';
import { NoteItemType } from '../../pages/Note/Content/Notes/Typings';
import './index.scss'
import connect from '../../redux/connect';

const Note = (props: any) => {
  const { updateNote, updateMyInfo } = props;

  return <>
    <img />
  </>
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

import { NoteItemType } from "../../pages/Note/Content/Notes/Typings";
import { myInfoType } from "../../pages/Note/Content/AboutMe/typings";
import noteReducer, { NoteInitState } from "./note";
import myInfoReducer, { MyInfoInitState } from "./myInfo";

interface Reducers {
  noteReducer: Function;
  myInfoReducer: Function
}

interface State {
  note: NoteItemType[];
  myInfo: myInfoType
}

export const initState: State = {
  note: NoteInitState,
  myInfo: MyInfoInitState
}

const combineReducers = (reducers: Reducers) => {
  const allReducer = (state: State = initState, action: any) => ({
    note: reducers.noteReducer(state.note, action),
    myInfo: reducers.myInfoReducer(state.myInfo, action)
  })
  return allReducer;
};

const allReducers = combineReducers({
  noteReducer,
  myInfoReducer
})

export default allReducers
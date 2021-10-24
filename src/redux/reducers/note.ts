import { UPDATENOTE } from "../constant";
import { NoteItemType } from "../../pages/Note/Content/Notes/Typings";
import { NoteActionType } from "../actions/typings";

export const NoteInitState: NoteItemType[] = []
export default function noteReducer( preState=NoteInitState, action: NoteActionType) {
  const { type, data } = action;
  switch (type) {
    case UPDATENOTE:
      return data;
    default:
      return preState;
  }
}
import { NoteItemType } from "../../../pages/Note/Content/Notes/Typings";
import { myInfoType } from "../../../pages/Note/Content/AboutMe/typings";

export interface NoteActionType {
  type: string;
  data: NoteItemType[]
}

export interface MyInfoActionType {
  type: string;
  data: myInfoType
}
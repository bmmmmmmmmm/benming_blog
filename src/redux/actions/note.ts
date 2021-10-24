import { NoteActionType } from "./typings";
import { NoteItemType } from "../../pages/Note/Content/Notes/Typings";
import { UPDATENOTE } from "../constant";

export const createUpdateNoteAction:Function = (data:NoteItemType[]):NoteActionType=> ({ type:UPDATENOTE, data })

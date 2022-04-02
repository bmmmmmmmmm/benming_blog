import instance from "../../request";
import { addNoteItemType } from "../../../pages/Note/Content/Notes/Typings";

export const showNotes = () =>
  instance({
    url: "/showNote",
    method: "GET"
  })

export const getNote = (id: any) =>
  instance({
    url: "/getNote",
    method: "post",
    data: id
  })

export const addNote = (note: addNoteItemType) =>
  instance({
    url: "/addNote",
    method: "post",
    data: note
  })
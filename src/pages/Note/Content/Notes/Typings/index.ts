export interface NoteItemType {
  _id: string;
  title?: string;
  createdAt: string;
  updatedAt: string;
  tags?: number|string|(number|string)[]
}

export interface addNoteItemType {
  title: any;
  discriptions?: string;
  tags?: number|string|(number|string)[];
  content: any;
}
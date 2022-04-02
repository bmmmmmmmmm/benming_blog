import React, { FC, ReactElement, useState, useRef, useEffect } from 'react';
import { addNote } from '../../util/api/notes';
import MDEditor from '@uiw/react-md-editor';
import './index.scss'

const AddNote:FC = ():ReactElement => {

  const [value, setValue] = useState<any>('');

  const clientH = document.documentElement.clientHeight;

  const inputVal = useRef<any>(null)

  const saveNote = ()=>{
    // console.log(`标题：${inputVal.current.value}`);
    // console.log(`内容：${value}`);
    addMyNote(inputVal.current.value, value)
  }

  const addMyNote = async (title:any, content:any)=> {
    try {
      const result:any = await addNote({title, content})
      if(result.data.masg === "success!")
        setValue(result.data.data.content);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div id="AddNote">
        <span id="AddNote-d1">标题</span>
        <span id="AddNote-d2">
          <input type="text" ref={inputVal} />
        </span>
        <span id="AddNote-d3">
          <button onClick={saveNote}>保存</button>
        </span>
      </div>
      <MDEditor
        value={value}
        height= {(clientH-40)*0.9}
        onChange={ setValue }
      /> 
    </div>
  );
}

export default AddNote;

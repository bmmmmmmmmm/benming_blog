import React, { FC, ReactElement, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { addNote } from '../../util/api/notes';
import MDEditor from '@uiw/react-md-editor';
import './index.scss'

const AddNote:FC = ():ReactElement => {

  const history = useHistory()
  const turnPage = (page:string)=> {
    history.push(page)
  }

  const [value, setValue] = useState<any>('');

  const clientH = document.documentElement.clientHeight;

  const inputVal = useRef<any>(null)

  const saveNote = ()=>{
    if(auth()) addMyNote(inputVal.current.value, value)
    else alert('密码错误！')
  }

  const addMyNote = async (title:any, content:any)=> {
    try {
      const result:any = await addNote({title, content})
      if(result.data.masg === "success!")
        setValue(result.data.data.content);
        alert('保存成功');
        turnPage('/note');
    } catch (error) {
      console.log(error);
    }
  }

  const auth = ()=>{
    const psw = prompt('请输入密码：');
    if(psw === '********')
      return true;
    return false;
  }

  return (
    <div id='AddNote-prv'>
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

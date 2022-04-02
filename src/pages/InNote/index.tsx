import React, { FC, ReactElement, useEffect, useRef, useState } from 'react';
import { getNote } from '../../util/api/notes';
import { useLocation } from 'react-router-dom'
import MDEditor from '@uiw/react-md-editor';
import './index.scss'

const InNote:FC = ():ReactElement => {

  const widthShow = useRef<any>(null)

  // const value = useRef<any>(null)

  const location = useLocation();

  const [value, setValue] = useState<any>('正在努力请求数据～～');

  useEffect(() => {

    const clientW = document.documentElement.clientWidth;
    widthShow.current.className = clientW > 768 ? 'inNote-editor-pc' : 'inNote-editor-mobile'

    const gainSingleNote = async ()=> {
      // console.log('axios');
      try {
        const result:any = await getNote({ id: location.pathname.slice(8) })
        if(result.data.masg === "success!")
          setValue(result.data.data.content);
      } catch (error) {
        console.log(error);
      }
    }
    gainSingleNote()

  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div id="inNote">
      <div id="inNote-editor" ref={widthShow}>
        <MDEditor.Markdown source={value} />
      </div>
    </div>
  );
}

export default InNote;

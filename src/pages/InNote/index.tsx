import React, { FC, ReactElement, useEffect, useRef, useState } from 'react';
import { getNote } from '../../util/api/notes';
import { useLocation } from 'react-router-dom'
import MDEditor from '@uiw/react-md-editor';
import './index.scss'

const InNote:FC = ():ReactElement => {

  const widthShow = useRef<any>(null)

  // const catlog = useRef<any>(null)

  const location = useLocation();

  const [value, setValue] = useState<any>('正在努力请求数据～～');

  const [catlog, setCatlog] = useState<any>(null);

  useEffect(() => {

    const clientW = document.documentElement.clientWidth;
    widthShow.current.className = clientW > 768 ? 'inNote-editor-pc' : 'inNote-editor-mobile'

    const gainSingleNote = async ()=> {
      // console.log('axios');
      try {
        const result:any = await getNote({ id: location.pathname.slice(8) })
        if(result.data.masg === "success!"){
          setValue(result.data.data.content);
          getCatlog(result.data.data.content);
        }
      } catch (error) {
        console.log(error);
      }
    }

    const getCatlog = (value:any)=>{
      let toc = [];
      let reg = /(#+)\s+?(.+?)\n/g;
      let regExecRes = null
      while((regExecRes = reg.exec(value))) {
        toc.push({
          level: regExecRes[1].length,
          title: regExecRes[2]
        });
      }
      // catlog.current = toc;
      // console.log(toc);
      
      setCatlog(toc);
    }

    gainSingleNote()

  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div id="inNote">
      <div id="inNote-editor" ref={widthShow}>
        <MDEditor.Markdown source={value} />
      </div>
      <div id="inNote-catlog">
        {
          catlog?.map((item:any)=>{
            let href = `#${item.title}`;
            return <a href={href}>{item.title}</a>
          })
        }
      </div>
    </div>
  );
}

export default InNote;

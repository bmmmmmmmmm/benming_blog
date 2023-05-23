import React, { FC, ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import { getNote } from '../../util/api/notes';
import { useLocation } from 'react-router-dom'
import MDEditor from '@uiw/react-md-editor';
import './index.scss'

const InNote:FC = ():ReactElement => {
  const location = useLocation();

  const [value, setValue] = useState<any>('正在努力请求数据～～');

  const [catlog, setCatlog] = useState<any[]>([]);

  const [catlogShow, setCatlogShow] = useState<boolean>(false)

  const [isPC, setIsPC] = useState<boolean>(true)

  useEffect(() => {

    const clientW = document.documentElement.clientWidth;
    setIsPC(clientW > 768)

    const valueOut = setTimeout(()=>{
      setValue('出错了，数据失联了～')
    }, 5000)

    const gainSingleNote = async ()=> {
      try {
        const result:any = await getNote({ id: location.pathname.slice(8) })
        if(result.data.masg === "success!"){
          setValue(result.data.data.content);
          getCatlog(result.data.data.content);
          clearTimeout(valueOut);
        }
      } catch (error) {
        console.log(error);
      }
    }

    // 获取目录
    const getCatlog = (value:any)=>{
      let toc: any[] = [];
      // let reg = /(#+)\s+?(.+?)\n/g;
      // let regExecRes = null
      // while((regExecRes = reg.exec(value))) {
      //   toc.push({
      //     level: regExecRes[1].length,
      //     title: regExecRes[2]
      //   });
      // }
      value
        .replace(/```/g, function () {
          return '\f'
        })
        .replace(/\f[^\f]*?\f/g, function () {
          return ''
        })
        .replace(/\r|\n+/g, function () { 
          return '\n'
        })
        .replace(/\[(.*)\]\((.*)\)/g, function () {
          return ''
        })
        .replace(/(http)(.*)\s/g, function () {
          return ''
        })
        .replace(/(#+)[^\n]*?(?:\n)/g, function (match:any) {
          var title = match
            .replace(/\([^)]*?\)/, '') // 去掉标题中可能存在的链接
            .replace('\n', '') // 去掉行尾换行符
            .replace(/^#+\s/, '') // 去掉 #
            .replace(/[A-Z]/g,function(match:any){return match.toLowerCase()})
            .match(/[0-9A-Za-z\u4e00-\u9fa5_-]/g)
          toc.push(title.join(''))
        })
        // console.log(toc);
        
      if(toc.length) {
        setCatlog(toc);
        setCatlogShow(true)
      }
    }

    gainSingleNote()

  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if(e.key === 'K' && isPC) {
      setCatlogShow(!catlogShow)
    }
  }, [catlogShow, isPC])

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);

  return (
    <div id="inNote" className={catlogShow ? '' : 'inNote-editor-no-catlog'}>
      <div id="inNote-editor" className={isPC ? 'inNote-editor-pc' : 'inNote-editor-mobile'}>
        <MDEditor.Markdown source={value} />
      </div>
      {console.log(catlogShow)}
      {catlogShow &&
        <div id="inNote-catlog">
          {
            catlog.length ? catlog.map((item:any, index:any)=>{
              let href = `#${item}`;
              return <div key={index}><a href={href}>{item}</a></div>
            })
            : '没有目录'
          }
        </div>
      }
    </div>
  );
}

export default InNote;

import React, { FC, ReactElement, useEffect, useRef } from 'react';
import AboutMe from './AboutMe';
import Notes from './Notes';
// import Motto from './Motto';
import Life from './Life';
// import TotalTag from './TotalTag';
import './index.scss'

const Content:FC = ():ReactElement => {

  const right = useRef<any>(null)

  useEffect(() => {
    const clientW = document.documentElement.clientWidth;
    right.current.className = clientW > 768 ? 'note-content-right-show' : 'note-content-right-hidden'
  }, [])

  document.addEventListener('scroll',()=>{
    // 屏幕高
    // const clientH = document.documentElement.clientHeight;
    // 屏幕宽
    const clientW = document.documentElement.clientWidth;
    // 距顶部距离
    // const distancetop = right.current?.getBoundingClientRect().top

    const { scrollTop } = document.documentElement
    if(right.current)
      // right.current.id = distancetop > 0.1 * clientH ? 'note-content-right' : 'note-content-right-fixed'
      // console.log(distancetop, '@@@', 0.1*clientH);
      // console.log(distancetop > 0.1 * clientH ? 'note-content-right' : 'note-content-right-fixed');
      // right.current.id = scrollTop < 0.45 * clientH ? 'note-content-right' : 'note-content-right-fixed'
      right.current.id = scrollTop < 0.25 * clientW ? 'note-content-right' : 'note-content-right-fixed'
  })

  return (
    <div id="note-content">
      <Notes/>
      <div id="note-content-right" ref={right}>
        <AboutMe/>
        <Life/>
        {/* <TotalTag/> */}
        {/* <Motto/> */}
      </div>
    </div>
  );
}

export default Content;

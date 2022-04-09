import React, { FC, ReactElement, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom'
import './index.css'

const Welcome: FC = (): ReactElement => {
  // const url = "";
  // const audio = new Audio(url);
  const history = useHistory()
  const play = ()=> {
    // history.push('/home')
    history.push('/note')
  }

  const bg = useRef(null)
  const [bgPosition, setbgPosition] = useState('');
  document.addEventListener('scroll', ()=>{
    const scrollY = window.scrollY
    if(scrollY !== 0){
      setbgPosition(`calc(50% + ${scrollY}px) calc(50% + ${scrollY}px`);
    }else{
      setbgPosition('')
    }
  })

  return (
    <div >
      <h1 id="wel-tittle">本明的<br/>个人博客</h1>
      <div id="wel-background" ref={bg} style={{ backgroundPosition: bgPosition }}><span>HELLO</span></div>
      <p id="wel-content">
        该发生的<br/>
        总会发生<br/>
        该在发生时引起其他事情发生的<br/>
        总会在发生时引起其他事情发生<br/>
        该在发生时引起本身再次发生的<br/>
        总会再次发生<br/>
        然而，时间上不必总是遵循前后顺序<br/>
      </p>
      <button id="wel-btn" onClick={play}>WELCOME</button>
    </div>
  );
}

export default Welcome;

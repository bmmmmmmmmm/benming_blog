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

  // const turnDown = ()=> {
  //   window.scrollTo({left:0, top:100})
  // }

  // function ScrollTo() {
  //   let scrollToptimer = setInterval(function() {
  //     var top = document.body.scrollTop || document.documentElement.scrollTop;
  //     var speed = top / 30;
  //     document.documentElement.scrollTop -= speed;
  //     if (top == 0) {
  //       clearInterval(scrollToptimer);
  //     }
  //   }, 5);
  // }

  function ScrollTo() {
    const toWhere = document.body.clientHeight - document.documentElement.clientHeight - 40;
    // console.log(document.body.scrollTop || document.documentElement.scrollTop);
    const speed = toWhere / 250;
    // document.documentElement.scrollTop += speed
    
    // console.log(speed);
    
    let scrollToptimer = setInterval(function() {
      document.documentElement.scrollTop += speed;
      // console.log(document.documentElement.scrollTop, toWhere);
      if (document.documentElement.scrollTop >= toWhere-speed) {
        clearInterval(scrollToptimer);
      }
    }, 5);
  }

  return (
    <div>
      <h1 id="wel-tittle">本明的<br/>个人博客</h1>
      <div id="wel-down">
        <svg onClick={()=>ScrollTo()} viewBox="0 0 1024 1024" width="60" height="60"><path d="M61.44 512C61.44 263.168 263.168 61.44 512 61.44s450.56 201.728 450.56 450.56-201.728 450.56-450.56 450.56S61.44 760.832 61.44 512z m397.312 180.85888c29.61408 31.92832 76.88192 31.92832 106.496 0l199.63904-215.28576 0.90112-1.00352c17.01888-19.456 16.52736-50.44224-1.10592-69.2224-19.29216-20.52096-48.82432-23.81824-71.4752-7.96672l-150.58944 105.49248c-18.67776 13.1072-42.55744 13.1072-61.2352 0L330.1376 398.9504c-22.26176-15.5648-51.3024-12.34944-70.26688 7.84384l-0.55296 0.57344a46.8992 46.8992 0 0 0-0.90112 1.024c-17.14176 19.31264-16.83456 50.29888 0.69632 69.2224l199.65952 215.26528z" p-id="15631" fill="#ffffff"></path></svg>
      </div>
      <div id="wel-background" ref={bg} style={{ backgroundPosition: bgPosition }}>
        <span>HELLO</span>
      </div>
      <div id="wel-content">
        {/* 该发生的<br/>
        总会发生<br/>
        该在发生时引起其他事情发生的<br/>
        总会在发生时引起其他事情发生<br/>
        该在发生时引起本身再次发生的<br/>
        总会再次发生<br/>
        然而，时间上不必总是遵循前后顺序<br/> */}
        <p style={{color: '#fff'}}>“我看见这一代最杰出的头脑毁于正常”</p>
        <p style={{color: '#ddd'}}>“我看见这一代最杰出的头脑毁于正常”</p>
        <p style={{color: '#bbb'}}>“我看见这一代最杰出的头脑毁于正常”</p>
        <p style={{color: '#999'}}>“我看见这一代最杰出的头脑毁于正常”</p>
        <p style={{color: '#777'}}>“我看见这一代最杰出的头脑毁于正常”</p>
        <p style={{color: '#555'}}>“我看见这一代最杰出的头脑毁于正常”</p>
        <p style={{color: '#333'}}>“我看见这一代最杰出的头脑毁于正常”</p>
      </div>
      <button id="wel-btn" onClick={play}>WELCOME</button>
    </div>
  );
}

export default Welcome;

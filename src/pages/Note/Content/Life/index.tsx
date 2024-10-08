import React, { FC, ReactElement, useState, useEffect } from 'react';
import './index.scss'

// const myBirth = 970243200000
const myBirth = new Date("2000-09-30T00:00:00+0800").getTime();

const Life:FC = ():ReactElement => {

  const [life, setlife] = useState(new Date().getTime());
  useEffect(() => {
    const t = setInterval(()=> {
      setlife(new Date().getTime())
    }, 1000)
    return ()=> {
      clearInterval(t)
    }
  })

  return (
    <div id="note-content-life">
      {/* <p id="note-content-life-p1">生命已过</p>
      <p id="note-content-life-p2">{Math.round((life-myBirth)/1000)} 秒</p> */}
      <p id="note-content-life-p3">{Math.round((life-myBirth)/1000)}</p>
    </div>
  );
}

export default Life;

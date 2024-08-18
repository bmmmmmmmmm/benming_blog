import React, { FC, ReactElement, useState, useEffect } from 'react';
import './index.scss'

// const loveStart = 1723387200000
const loveStart = new Date("2024-08-11T22:40:00+0800").getTime();

const Love:FC = ():ReactElement => {

  const [love, setLove] = useState(new Date().getTime());
  useEffect(() => {
    const t = setInterval(()=> {
      setLove(new Date().getTime())
    }, 1000)
    return ()=> {
      clearInterval(t)
    }
  })

  return (
    <div id="note-content-love">
      <p id="note-content-love-p3">{Math.round((love-loveStart)/1000)}</p>
    </div>
  );
}

export default Love;

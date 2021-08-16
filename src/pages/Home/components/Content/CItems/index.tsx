import React, { FC, ReactElement } from 'react';
import { useHistory } from 'react-router-dom'
import { RGB } from '../Typings'
import './index.scss'


const CItems:FC<RGB> = (props: RGB):ReactElement => {
  const history = useHistory()

  const turnPage = (page: string)=> {
    history.push(page)
  }

  const { rgb } = props
  return (
    <div id="citems" style={{backgroundColor:`rgb(${rgb[0]},${rgb[1]},${rgb[2]})`}}>
      <div id="citems-screen" onClick={()=>turnPage('/notfound')}>
        <p style={{color:`rgb(${255-rgb[0]},${255-rgb[1]},${255-rgb[2]})`}}></p>
      </div>
    </div>
  );
}

export default CItems;

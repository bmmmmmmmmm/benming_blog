import React, { FC, ReactElement } from 'react';
import { useHistory } from 'react-router-dom'
import { CItemProps } from '../Typings'
import './index.scss'


const CItems:FC<CItemProps> = (props: CItemProps):ReactElement => {
  const openPage = (href:string)=> {
    window.open('_black')!.location.href = href
  }

  const { rgb } = props
  const link = props.iframeLink || 'https://koubenming.com'
  
  return (
    <div id="hut-content-citems" style={{backgroundColor:`rgb(${rgb[0]},${rgb[1]},${rgb[2]})`}}>
      <div id="hut-content-citems-screen" style={{background: `url(https://blog-oss.kbm.ink/111108.png) center center no-repeat`, width: '60%', height: '80%', backgroundSize: '100%', overflow: 'hidden'}} onClick={()=>openPage(link)}>
        {/* <p style={{color:`rgb(${255-rgb[0]},${255-rgb[1]},${255-rgb[2]})`}}></p> */}
        {/* <div id='hahaha' style={{background: `url(https://blog-oss.kbm.ink/082049.png) center center no-repeat`, backgroundSize: '100%'}}></div> */}
        <div id='hut-content-citems-iframe-box'>
          {
            link ? <iframe id='hut-content-citems-iframe' style={{transform: `scale(${0.326 * document.documentElement.clientWidth / 1920})`}} width="1920px" height="920px" src={link} frameBorder={0}></iframe>
            : <div>1</div>
          }
        </div>
      </div>
    </div>
  );
}

export default CItems;

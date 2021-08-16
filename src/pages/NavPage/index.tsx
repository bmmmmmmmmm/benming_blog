import React, { FC, ReactElement } from 'react';
import { useHistory } from 'react-router-dom'
import TopBar from '../../components/TopBar';
import './index.scss'

const NavPage:FC = ():ReactElement => {

  const history = useHistory()
  const turnPage = (page:string)=> {
    history.push(page)
  }
  const onc = ()=> {
    alert('To be continued')
  }
  return (
    <div>
      <div id="navpage-topbar"><TopBar/></div>
      <div id="navpage">
        <div id="navpage-p1" className="navpage-p" onClick={()=>turnPage('/note')}>
          <p>NOTE</p>
        </div>
        <div id="navpage-p2" className="navpage-p" onClick={()=>turnPage('/thinking')}>
          <p>Think</p>
          <p>ing</p>
        </div>
        <div id="navpage-p3" className="navpage-p" onClick={()=>turnPage('/project')}>mini-projects</div>
        <div id="navpage-p4" className="navpage-p" onClick={()=>turnPage('/record')}>
          <p id="nav-p4-1">R</p>
          <p id="nav-p4-2">E</p>
          <p id="nav-p4-3">C</p>
          <p id="nav-p4-4">O</p>
          <p id="nav-p4-5">R</p>
          <p id="nav-p4-6">D</p>
        </div>
        <div id="navpage-p5" className="navpage-p" onClick={onc}>
          <p id="nav-p5-1">To be</p>
          <p id="nav-p5-2">continued</p>
          <div className="nav-p5-squa" id="nav-p5-squa-1"></div>
          <div className="nav-p5-squa"></div>
          <div className="nav-p5-squa"></div>
        </div>
      </div>

    </div>
  );
}

export default NavPage;

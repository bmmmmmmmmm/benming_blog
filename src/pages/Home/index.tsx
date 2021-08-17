import React, { FC, ReactElement } from 'react';
import { useHistory } from 'react-router-dom'
import TopBar from '../../components/TopBar';
import './index.scss'

const Home:FC = ():ReactElement => {

  const history = useHistory()
  const turnPage = (page:string)=> {
    history.push(page)
  }
  const onc = ()=> {
    alert('To be continued')
  }
  return (
    <div>
      <div id="home-topbar"><TopBar/></div>
      <div id="home">
        <div id="home-p1" className="home-p" onClick={()=>turnPage('/note')}>
          <p>NOTE</p>
        </div>
        <div id="home-p2" className="home-p" onClick={()=>turnPage('/thinking')}>
          <p>Think</p>
          <p>ing</p>
        </div>
        <div id="home-p3" className="home-p" onClick={()=>turnPage('/project')}>mini-projects</div>
        <div id="home-p4" className="home-p" onClick={()=>turnPage('/record')}>
          <p id="home-p4-1">R</p>
          <p id="home-p4-2">E</p>
          <p id="home-p4-3">C</p>
          <p id="home-p4-4">O</p>
          <p id="home-p4-5">R</p>
          <p id="home-p4-6">D</p>
        </div>
        <div id="home-p5" className="home-p" onClick={onc}>
          <p id="home-p5-1">To be</p>
          <p id="home-p5-2">continued</p>
          <div className="home-p5-squa" id="home-p5-squa-1"></div>
          <div className="home-p5-squa"></div>
          <div className="home-p5-squa"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;

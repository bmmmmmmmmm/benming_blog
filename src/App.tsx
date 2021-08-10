import React from 'react';
import { NotPC } from './pages'
import routes from './routers/main/PCRouter';
import HomeRoute from './routers';
import { BrowserRouter } from "react-router-dom";

const IsPC = () => {
  const userAgentInfo = navigator.userAgent;
  const Agents = ["Android", "iPhone",
    "SymbianOS", "Windows Phone",
    "iPad", "iPod"];
  let flag = true;
  for (let v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

function App() {
  
  if(IsPC()){
    return (
      <BrowserRouter>
        <HomeRoute routes={routes} />
      </BrowserRouter>
    );
  }
  return(
    <NotPC/>
  )

}

export default App;

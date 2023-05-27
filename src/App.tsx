import React from 'react';
import { NotPC } from './pages'
import routes from './routers/main/PCRouter';
import HomeRoute from './routers';
import { BrowserRouter } from "react-router-dom";
import Provider from './redux/store';
import { GlobalScrollbar } from 'mac-scrollbar';
// 应该要引用库中的 css 文件，即
// import 'mac-scrollbar/dist/mac-scrollbar.css'
// 但是该 css 文件中有语法兼容性问题，导致 build 报错
// 故将 css 文件单独拷贝出来并作修改，再引用
import './mac-scrollbar.css';

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
  console.log('========');
  if(IsPC()){
    return (
      <>
        <Provider>
          <BrowserRouter>
            <HomeRoute routes={routes} />
          </BrowserRouter>
        </Provider>
        <GlobalScrollbar />
      </>
    );
  }
  return(
    <>
      <NotPC/>
      <GlobalScrollbar />
    </>
    // <>
    //   <Provider>
    //     <BrowserRouter>
    //       <HomeRoute routes={routes} />
    //     </BrowserRouter>
    //   </Provider>
    //   <GlobalScrollbar />
    // </>
  )

}

export default App;

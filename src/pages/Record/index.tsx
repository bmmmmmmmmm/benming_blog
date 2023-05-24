import React, { FC, ReactElement, useState } from 'react';

const Record:FC = ():ReactElement => {
  const [picShow, setPicShow] = useState<boolean>(false)
  return (
    <div className='unfinished-page' onClick={() => setPicShow(!picShow)} >
      {
        picShow ? <img src="http://blog-oss.kbm.ink/095848.png" alt="我想记录生活 可我快不再年轻" />
        : '永远有人正年轻'
      }
      
    </div>
  );
}

export default Record;

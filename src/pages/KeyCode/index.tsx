import { useCallback, useEffect, useState } from 'react';
import './index.scss'

type KeyCodeShow = {
  Key: string,
  Code: number
}

const KeyCode = () => {
  const [keyInfo, setKeyInfo] = useState<KeyCodeShow>()

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // console.log('=====\n', e, JSON.stringify(e));
    setKeyInfo({
      Key: `${e.key} | ${e.code}`,
      Code: e.keyCode || e.which
    })
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);

  return (
    <div id="key-code">
      <h1>{`JavaScript Key Code`}</h1>
      <h2>{JSON.stringify(keyInfo)}</h2>
    </div>
  );
}

export default KeyCode

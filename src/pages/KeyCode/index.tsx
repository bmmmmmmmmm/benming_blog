import { useCallback, useEffect, useState } from 'react';
import './index.scss'

type KeyCodeShow = {
  key: string,
  keyCode: number,
  which: number,
  code: string,
  location: number,
  altKey: boolean,
  ctrlKey: boolean,
  metaKey: boolean,
  shiftKey: boolean,
  repeat: boolean
}

const KeyCode = () => {
  const [keyInfo, setKeyInfo] = useState<KeyCodeShow>()

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // console.log('=====\n', e, JSON.stringify(e));
    const { key, keyCode, which, code, location, altKey, ctrlKey, metaKey, shiftKey, repeat } = e;
    setKeyInfo({ key, keyCode, which, code, location, altKey, ctrlKey, metaKey, shiftKey, repeat })
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
      <pre>{JSON.stringify(keyInfo, null, 2)}</pre>
    </div>
  );
}

export default KeyCode

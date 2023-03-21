import {useEffect, useState} from 'react';

const useVisible = (handler = null) => {

  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const close = (e) => {
      if(e.keyCode === 27){
        setIsShow(false)
        if(handler){
          handler()
        }
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  },[])

  return [isShow,setIsShow]
};

export default useVisible;
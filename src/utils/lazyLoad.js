import React from 'react';


export function lazyLoad(path,nameExport){
  return React.lazy(() => {
   // const promise = import(path)
    // if(nameExport == null){
    //   return promise
    // }else{
      return import(path).then((module) => ({
        default: module[nameExport]
      }))
    // }
  })
}
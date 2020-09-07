import React, {useEffect} from "react";

export default function MultiUseEffect() {

  useEffect(() => {
    console.log('网络请求')
  })

  useEffect(() => {
    console.log('修改DOM')
  })

  useEffect(() => {
    console.log('事件监听')

    return () => {
      console.log('取消监听')
    }
  })

  return (<div>
    <h2>MultiUseEffect</h2>
  </div>)
}
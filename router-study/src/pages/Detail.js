import React from 'react'
/*
* 动态路由
* */
export default function Detail(props){
  console.log(props.match.params.id)

  return (<div>
    <h2>Detail</h2>
  </div>)

}
import React from "react";
import {useSelector} from "react-redux";

export function Home() {
  let {banner, recommend, count} = useSelector(state => {
    return {
      banner: state.homeInfo.state.banner,
      recommend: state.homeInfo.state.recommend,
      count:state.countInfo.state.count
    }
  })
  setTimeout(()=>{
    console.log(recommend)
  },1000)
  console.log(banner,recommend,count)
  return (
      <div>
        <h2>哈哈哈</h2>
      </div>
  )
}
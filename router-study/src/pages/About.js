import React from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import {renderRoutes} from "react-router-config";

/*
* 路由嵌套
* */

export function AboutProduct() {
  return (
      <ul>
        <li>商品信息1</li>
        <li>商品信息2</li>
        <li>商品信息3</li>
      </ul>
  )
}

export function AboutMessage() {
  return (
      <ul>
        <li>消息列表1</li>
        <li>消息列表2</li>
        <li>消息列表3</li>
      </ul>
  )
}

export default function About(props) {
  return (<div>
    <h2>About</h2>
    <Link to='/about'>商品</Link>
    <Link to='/about/message'>消息</Link>

    {renderRoutes(props.route.routes)}
  </div>)
}
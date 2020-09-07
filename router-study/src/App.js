import React, {PureComponent} from 'react';
import {NavLink, Route, Switch, withRouter, Link} from 'react-router-dom'
import {renderRoutes,matchRoutes} from "react-router-config";

import router from "./router";


/*
* NavLink: 类似与Link但是更强大 常用属性
*   exact:是否精确匹配
*   to:点击时跳转的路径
*   activeStyle:当被选中时的样式
*   activeClassName:当被选中时的class
* Route:配置组件的映射
*   path:匹配的路径
*   component:匹配的组件
*   exact:是否精确匹配
*
*
* */


class App extends PureComponent {
  constructor() {
    super()
  }

  render() {
    console.log(matchRoutes(router, '/detail3'));
    return (
        <div id='app'>
          <NavLink exact to='/' activeStyle={{color: 'red'}}>首页</NavLink>
          <NavLink to='/about' activeStyle={{color: 'red'}}>关于</NavLink>
          <NavLink to={{
            pathname: 'detail3',
            query: {name: 'kezi', age: 18},
            state: {message: 'cool'},
            search: '?apikey=123'
          }}>详情</NavLink>
          <NavLink to='/user'>用户</NavLink>
          <NavLink to='/login'>登陆</NavLink>
          {/* search传参 */}
          {/*<Link to='/detail2?name=kezi&message=shuai'>详情</Link>*/}
          {/* 动态路由传参 */}
          {/*<Link to='/detail/abc123'>详情</Link>*/}
          {/* 手动跳转 */}
          <button onClick={e => this.pushToProfile(e)}>我的</button>

          {/*<Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/profile" component={Profile}/>
            <Route path='/login' component={Login}/>
            <Route path='/user' component={User}/>

             动态路由
            <Route path='/detail/:id' component={Detail}/>
             search传参
            <Route path='/detail2' component={Detail2}/>
             to传参
            <Route path='/detail3' component={Detail3}/>
          </Switch>*/}
          {renderRoutes(router)}
        </div>
    );
  }

  pushToProfile() {
    this.props.history.push('/profile')
  }
}

export default withRouter(App);

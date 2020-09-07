import React, {PureComponent} from 'react';
import {Link, Route, BrowserRouter} from 'react-router-dom'

import Home from './pages/Home'
import About from "./pages/About";
import Profile from './pages/Profile'

class App extends PureComponent {
  constructor() {
    super()
  }

  render() {
    return (
        <BrowserRouter>
          <Link to='/'>首页</Link>
          <Link to='/about'>关于</Link>
          <Link to='/profile'>个人</Link>

          <Route exact  path="/" component={Home}/> 
          <Route path="/about" component={About}/>
          <Route path="/profile" component={Profile}/>
        </BrowserRouter>
    );
  }
}

export default App;

import React,{PureComponent} from 'react'
import {Redirect} from "react-router";

export default class User extends PureComponent{
  constructor() {
    super();
    this.state = {
      isLogin:false
    }
  }

  render() {
    if(this.state.isLogin){
      return (
          <div>
            <h2>hello: kezi</h2>
          </div>
      );
    }
    return <Redirect to='/login'/>

  }

}
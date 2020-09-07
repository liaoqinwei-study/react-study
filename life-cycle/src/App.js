import React, {Component} from 'react'


class Child extends Component {
/*  render() {
    try {
     throw new Error('哈哈哈')
    }catch (e) {
      console.log(e)
    }
    return (
        <div>
          <h2> Child </h2>
        </div>
    );
  }*/
}

export default class App extends Component {
  static getDerivedStateFromError(error) {
    console.log('DerivedStateFromError', error)
  }

  constructor() {
    super();
  }

  componentDidCatch(error, info) {
    console.log('DidCatch', error, info)
  }


  render() {
    console.log('--------RENDER---------')
    return (
        <div>
          <Child/>
        </div>
    );
  }
}



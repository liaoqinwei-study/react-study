import React, {Component} from 'react';


// 类组件
export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }

    console.log('我被初始化了')
    console.log(props)
  }

  render() {
    return (
        <div>
          <h2>Hello React</h2>
          <span>{this.state.count}</span>
          <button onClick={this.increment.bind(this)}>+</button>
        </div>
    )
  }

  increment() {
    this.setState({
      count: ++this.state.count
    })
  }

  componentDidMount() {
    console.log('我被绑定到了页面上')
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('我被更新了')
  }

  componentWillUnmount() {
    console.log('我被销毁了')
  }
}

// 函数组件
/*export default function App(){
  return (
      <h2>Hello React</h2>
  )
}*/

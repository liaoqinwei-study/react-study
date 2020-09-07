import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  static defaultProps = {name: '壳子i', message: '帅'}

  /* 当数据要渲染的时候 执行此声明周期 */
  static getDerivedStateFromProps(nexProps, nexState) {
    console.log('1-Derived', nexProps, nexState)
    return null
  }

  /* 在创建的时候执行此声明周期 */
  constructor(props) {
    console.log(App.defaultProps)
    super(props);
    this.state = {
      n: 1
    }
  }

  /* 组件第一次挂在完成 执行 */
  componentDidMount() {
    console.log('2-mount-down')
    this.setState({
      n:5
    })
  }

  /* 每次数据更新时会回调此函数 false：不更新 true：更新视图，执行render */
  shouldComponentUpdate(nexProps, nexState) {
    console.log('3-should-Component-Update', nexProps, nexState)
    return true
  }

  /* 此生命周期 在render之后 修改dom之前执行 可以修改快照 */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('4-snapshot-before-update')
    return 123
  }

  /* 组件每次更新完成 */
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('5-update-down', prevProps, prevState, snapshot)
  }

  /* 每次都会调用 */
  render() {
    console.log('RENDER')
    return <div>
      {this.state.n}
    </div>
  }
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

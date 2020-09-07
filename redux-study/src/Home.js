import React, {PureComponent} from "react";

import {connect} from 'react-redux'

import {subAction} from "./redux/actionCreator";
import {FETCH_HOME_MULTIDATA} from './redux/constants'

let mapStateToProps = (state) => {
  return {
    counter: state.counterInfo.counter,
    banner: state.homeInfo.banner,
    recommend: state.homeInfo.recommend
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    subNumber(number) {
      dispatch(subAction(number))
    },
    fetchHomeMultidata() {
      dispatch({type:FETCH_HOME_MULTIDATA})
    }
  }
}

class Home extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let {fetchHomeMultidata} = this.props
    fetchHomeMultidata()
  }

  render() {
    let {counter, subNumber, banner, recommend} = this.props
    return (
        <div>
          <h2>HOME</h2>
          <p>当前计数：{counter}</p>
          <div>
            <button onClick={() => {
              subNumber(1)
            }}>- 1
            </button>
            <button onClick={() => {
              subNumber(5)
            }}>- 5
            </button>
          </div>

          <div>
            <ul>
              {banner.map(item=><li key={item.acm}>
                <div>
                  <img src={item.image} alt=""/>
                </div>
                <p>{item.title}</p>
              </li>)}
            </ul>
          </div>
        </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
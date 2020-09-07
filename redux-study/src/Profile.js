import React, {PureComponent} from "react";

import {connect} from 'react-redux'

import {addAction, changeRecommendsAction, changeBannersAction} from "./redux/actionCreator";


let mapStateToProps = (state) => {
  return {
    counter: state.counterInfo.counter,
    banner: state.homeInfo.banner,
    recommend: state.homeInfo.recommend
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addNumber(number) {
      dispatch(addAction(number))
    },
  }
}

class Profile extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    let {counter, addNumber, recommend} = this.props
    return (
        <div>
          <h2>Profile</h2>
          <p>当前计数：{counter}</p>
          <div>
            <button onClick={() => {
              addNumber(1)
            }}>+ 1
            </button>
            <button onClick={() => {
              addNumber(5)
            }}>+ 5
            </button>
          </div>

          <div>
            <ul>
              {recommend.map(item => <li key={item.acm}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
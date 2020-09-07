import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


const PrimaryButton = styled.button`
  color:red;  
  background-color: #fff;
  outline: 0;
  border: 0;
`

class App extends Component{
  constructor() {
    super();
  }

  render() {
    return (
        <div>
          <PrimaryButton>哈哈哈哈哈</PrimaryButton>
        </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
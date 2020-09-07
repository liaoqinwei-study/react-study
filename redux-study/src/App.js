import React,{PureComponent} from "react";

import Home from './Home'
import Profile from "./Profile";

class App extends PureComponent{
  render() {
    return (
        <section>
          <Home/>
          <hr/>
          <Profile/>
        </section>
    );
  }
}

export default App

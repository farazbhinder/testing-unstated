import React, { Component } from 'react';
import './App.css';
import { Provider, Subscribe } from 'unstated';
import MyContainer from './store';
import ListComponent from './ListComponent';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider>
        <Subscribe to={[MyContainer]}>
          {myc => {
            if (myc.state.list1 === null) {
              myc.fetchList1();
            }
            return (
              <div className="App">
                <ListComponent list1={myc.state.list1} />
              </div>
            );
          }}
        </Subscribe>
      </Provider>
    );
  }
}

export default App;

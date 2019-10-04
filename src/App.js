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

  componentDidMount() {
    let obj = new MyContainer();
    console.log('in componentDidMount');
    console.log(obj);

    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(resp => {
        console.log('resp.data is ');
        console.log(resp.data);
        obj.setList1(resp.data);
        // shouldn't above function call re-render app component as we have subscribed to MyContainer?
        // but i have to do page refresh to get list1 rendered
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <Provider>
        <Subscribe to={[MyContainer]}>
          {myc => {
            const list1 = myc.getList1();
            console.log('list1 is ' + list1);
            return (
              <div className="App">
                <ListComponent list1={list1} />
              </div>
            );
          }}
        </Subscribe>
      </Provider>
    );
  }
}

export default App;

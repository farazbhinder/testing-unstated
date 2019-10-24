import React, { Component } from 'react';
import './App.css';
import withPosts from './withPosts';
import ListComponent from './ListComponent';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.myc.fetchList1();
  }

  render() {
    const { myc } = this.props;
    const list1 = myc.getList1();
    return (
      <div className="App">
        <ListComponent list1={list1} />
      </div>
    );
  }
}

export default withPosts(App);

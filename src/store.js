import { Container } from 'unstated';
import axios from 'axios';

const defaultState = {
  test1: 'test1',
  list1: null
};

class MyContainer extends Container {
  constructor(props) {
    super(props);

    this.state = this.readStorage();
  }

  readStorage() {
    if (window && window.localStorage) {
      const state = window.localStorage.getItem('appState');
      if (state) {
        return JSON.parse(state);
      }
    }
    return defaultState;
  }

  syncStorage() {
    if (window && window.localStorage) {
      const state = JSON.stringify(this.state);
      window.localStorage.setItem('appState', state);
    }
  }

  fetchList1() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(resp => {
        console.log('resp.data is ');
        console.log(resp.data);
        this.setList1(resp.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  getList1() {
    return this.state.list1;
  }

  setList1 = async list => {
    console.log('in setList1');
    await this.setState(state => {
      let retState = { ...state };
      retState.list1 = JSON.parse(JSON.stringify(list));
      return retState;
    });
    this.syncStorage();
  };
}

export default MyContainer;

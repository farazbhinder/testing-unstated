import { Container } from 'unstated';
import axios from 'axios';

// used this approach from answer at stackoverflow: https://stackoverflow.com/a/57708374

class MyContainer extends Container {
  state = {
    test1: 'test1',
    list1: null
  };

  fetchList1 = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(resp => {
        console.log('resp.data is ');
        console.log(resp.data);
        this.setState({ list1: JSON.parse(JSON.stringify(resp.data)) });
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export default MyContainer;

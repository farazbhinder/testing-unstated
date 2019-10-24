import React from 'react';
import { Provider, Subscribe } from 'unstated';
import MyContainer from './store';

const withPosts = WrappedComponent => {
  class HOC extends React.Component {
    render() {
      return (
        <Provider>
          <Subscribe to={[MyContainer]}>
            {myc => {
              return <WrappedComponent myc={myc} />;
            }}
          </Subscribe>
        </Provider>
      );
    }
  }
  return HOC;
};

export default withPosts;

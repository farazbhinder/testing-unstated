import React, { Component } from 'react';

class ListComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { list1 } = this.props;
    console.log(this.props);

    return (
      <div>
        {list1 === null
          ? null
          : list1.map(element => {
              return <p>{element.title}</p>;
            })}
      </div>
    );
  }
}

export default ListComponent;

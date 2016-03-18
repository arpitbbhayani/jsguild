import React from 'react';
import ReactDOM from 'react-dom';

import '../../client/jsguild.js';

export default class HomeContainer extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h1>Hello World from maincontainer!</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <HomeContainer />,
  document.getElementById('maincontainer')
);

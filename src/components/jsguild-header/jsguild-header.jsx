import React from 'react';

import '../../client/common.js';


export default class HomeContainer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="ui grid">
        <div className="two wide column computer tablet only"></div>
        <div className="twelve wide column computer tablet only">
          <nav className="ui top menu borderless">
            <a className="item">JS GUILD</a>
            <a className="right item">Make javascript awesome again</a>
          </nav>
        </div>
        <div className="sixteen wide column mobile only">
          <nav className="ui top menu borderless">
            <a className="item">JS GUILD</a>
            <a className="right item">Make javascript awesome again</a>
          </nav>
        </div>
        <div className="two wide column computer tablet only"></div>
      </div>
    );
  }
}

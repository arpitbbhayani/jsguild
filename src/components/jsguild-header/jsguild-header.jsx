import React from 'react';
import { Link } from 'react-router';

import '../../client/common.js';

import './jsguild-header.scss';

export default class HomeContainer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="ui grid">
        <div className="sixteen wide column">
          <nav className="ui top menu practo-blue inverted borderless">
            <Link to="/" className="item">JS GUILD</Link>
            <a className="right item">Make javascript awesome again</a>
          </nav>
        </div>
      </div>
    );
  }
}

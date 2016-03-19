import React from 'react';

import { browserHistory } from 'react-router';

export default class DummySearchComponent extends React.Component {
  constructor() {
    super();
    this.goToSearch = this.goToSearch.bind(this);
  }

  goToSearch() {
    browserHistory.push('/search');
  }

  render() {
    return (
      <div className="ui basic center aligned segment inverted grey" onClick={this.goToSearch}>
        <div className="ui huge header">
          <h1><i className="search icon"></i>Dummy search component</h1>
        </div>
      </div>
    );
  }
}

import React from 'react';
import ReactDOM from 'react-dom';

import '../../client/common.js';

import HeaderComponent from '../jsguild-header/jsguild-header.jsx';
import Index from '../jsguild-index/jsguild-index.jsx';
import SearchViewComponent from '../jsguild-search-view/jsguild-search-view.jsx';

import { browserHistory, Router, Route, IndexRoute } from 'react-router';

export default class HomeContainer extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <HeaderComponent/>
        { this.props.children }
      </div>
    );
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={HomeContainer}>
      <IndexRoute component={Index} />
      <Route path="search" component={SearchViewComponent} />
    </Route>
  </Router>
), document.getElementById('maincontainer'));

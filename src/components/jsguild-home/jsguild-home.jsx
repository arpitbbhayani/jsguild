import React from 'react';
import ReactDOM from 'react-dom';

import '../../client/common.js';

import HeaderComponent from '../jsguild-header/jsguild-header.jsx';
import DummySearchComponent from '../jsguild-search-dummy/jsguild-search-dummy.jsx';
import FeaturedLibs from '../jsguild-featured-libs/jsguild-featured-libs.jsx';
import SearchComponent from '../jsguild-search/jsguild-search.jsx';

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
        <FeaturedLibs/>
      </div>
    );
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={HomeContainer}>
      <IndexRoute component={DummySearchComponent} />
      <Route path="search" component={SearchComponent} />
    </Route>
  </Router>
), document.getElementById('maincontainer'));

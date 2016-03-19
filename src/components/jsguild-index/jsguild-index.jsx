import React from 'react';
import DummySearchComponent from '../jsguild-search-dummy/jsguild-search-dummy.jsx';
import FeaturedLibs from '../jsguild-featured-libs/jsguild-featured-libs.jsx';

export default class Index extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <DummySearchComponent/>
        <FeaturedLibs/>
      </div>
    );
  }
}

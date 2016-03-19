import React from 'react';

import SearchComponent from '../jsguild-search/jsguild-search.jsx';
import SearchResultComponent from '../jsguild-search-result/jsguild-search-result.jsx';

export default class SearchViewComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <SearchComponent/>
        <SearchResultComponent/>
      </div>
    );
  }
}

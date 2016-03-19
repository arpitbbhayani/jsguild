import React from 'react';
import './jsguild-search.scss';

import { browserHistory } from 'react-router';


export default class SearchComponent extends React.Component {
  constructor() {
    super();
    this.submitQuery = this.submitQuery.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);

    this.state = {
      searchQuery: '',
    };
  }

  handleTextChange(e) {
    this.setState({searchQuery: e.target.value});
  }

  submitQuery(e) {
    e.preventDefault();
    const searchQuery = this.state.searchQuery;
    console.log(searchQuery);
    this.setState({searchQuery: ''});
    browserHistory.push('/search?q=' + searchQuery);
  }

  render() {
    return (
      <div className="ui basic center aligned segment bigbox">
        <form method="GET" onSubmit={ this.submitQuery }>
          <div className="ui very massive fluid input transparent">
            <input name="q" type="text" placeholder="Search your requirements" onChange={ this.handleTextChange } value={ this.state.searchQuery }/>
          </div>
        </form>
      </div>
    );
  }
}

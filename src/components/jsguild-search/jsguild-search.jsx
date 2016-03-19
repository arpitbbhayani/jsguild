import React from 'react';


export default class SearchComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="ui basic center aligned segment inverted grey">
        <div className="ui huge header">
          <h1><i className="search icon"></i>Search component</h1>
        </div>
      </div>
    );
  }
}

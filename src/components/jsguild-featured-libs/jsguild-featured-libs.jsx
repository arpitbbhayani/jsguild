import React from 'react';

export default class FeaturedLibs extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="ui divider"></div>
        <div className="ui basic center aligned segment">
          <div className="ui huge header">
            <h2>Featured Libs</h2>
          </div>
        </div>
      </div>
    );
  }
}

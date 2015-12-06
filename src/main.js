// src/main.js
"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var Header = React.createClass({
  displayName: "Header",

  render: function render() {

    return (
      <div className="page-header">
        <h1>Mix Tape <small>classic 80s</small></h1>
      </div>
    );
  }
});

ReactDOM.render(<Header />, document.getElementById('app'));



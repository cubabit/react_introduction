// src/main.js
"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var Header = React.createClass({
  displayName: "Header",
  render: function render() {
    return React.createElement(
      "div",
      null,
      "Mix Tape"
    );
  }
});

ReactDOM.render(<Header />, document.getElementById('app'));



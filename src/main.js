"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var itemList = [
  {label: 'Get shopping', isCompleted: false},
  {label: 'Put out rubbish', isCompleted: false},
  {label: 'Watch Breaking Bad', isCompleted: true}
];


var ListItem = React.createClass({
  componentWillMount: function () {
    this.setState({
      isCompleted: this.props.isCompleted
    });
  },
  handleCheckboxClick: function (event) {
    this.setState({isCompleted: !this.state.isCompleted});
  },

  render: function () {
    return (
      <div>
        <input type="checkbox" checked={this.state.isCompleted} onClick={this.handleCheckboxClick} /> {this.props.label}
      </div>
    );
  }
});

var List = React.createClass({
  listElements: function () {
    return this.props.list.map(function (elem, index) {
      return (
        <li key={index}><ListItem label={elem.label} isCompleted={elem.isCompleted} /></li>
      );
    });
  },

  render: function () {
    return (
      <ul>
        {this.listElements()}
      </ul>
    );
  }
});

ReactDOM.render(<List list={itemList} />, document.getElementById('app'));



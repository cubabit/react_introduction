"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var itemList = [
  {label: 'Get shopping', isCompleted: false},
  {label: 'Put out rubbish', isCompleted: false},
  {label: 'Watch Breaking Bad', isCompleted: false}
];


var Item = React.createClass({
  render: function () {
    var labelTag;
    if (this.props.isCompleted) {
      labelTag = <s>{this.props.label}</s>;
    } else {
      labelTag = <span>{this.props.label}</span>;
    } 

    return (
      <div>
        <input type="checkbox" checked={this.props.isCompleted} onClick={this.props.onClick} /> {labelTag}
      </div>
    );
  }
});

var List = React.createClass({
  getInitialState: function() {
    return {items: this.props.list};
  },

  handleClick: function(index) {
    var items = this.state.items;
    items[index].isCompleted = !items[index].isCompleted;
    this.setState({ items: items });
  },

  listElements: function () {
    return (
      <div>
      {this.state.items.map(function (elem, index) {
        var boundClick = this.handleClick.bind(this, index);
        return (
          <li key={index}><Item label={elem.label} isCompleted={elem.isCompleted} onClick={boundClick} /></li>
        );
      }, this)}
      </div>
    );
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



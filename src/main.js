"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var itemList = [
  {label: 'Get shopping', isCompleted: false},
  {label: 'Put out rubbish', isCompleted: false},
  {label: 'Watch Breaking Bad', isCompleted: true}
];


var ListItem = React.createClass({
  render: function () {
    return (
      <div>
        <input type="checkbox" checked={this.props.checked} /> {this.props.label}
      </div>
    );

  }
});

var List = React.createClass({
  
  handleChechboxClick: function(elem) {
    elem.isCompleted = !elem.isCompleted;

    this.setState({ items: this.state.items });
    // var updatedList = this.props.albums.filter(function(album) {
    //     return album.title.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    //   });

    // this.setState({ albums: updatedList });
  },
  componentWillMount: function() {
    this.setState({items: this.props.list});
  },

  listElements: function () {
    return this.state.items.map(function (elem, index) {
      return (
        <li key={index} onClick={this.handleChechboxClick.bind(this, elem)}><ListItem label={elem.label} checked={elem.isCompleted} /></li>
      );
    }.bind(this));
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



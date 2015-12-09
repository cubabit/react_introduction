"use strict";

var React = require('react');
var AlbumList = require('./albumList.js');

module.exports = React.createClass({
  handleFilterChange: function(event) {
      var updatedList = this.props.albums.filter(function(album) {
        return album.title.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
      });

      this.setState({ albums: updatedList });
  },

  componentWillMount: function() {
    this.setState({albums: this.props.albums});
  },

  render: function() {
    return (
      <div className="container">
        <div className="row">
          <h1 className="text-center">Classic 80's albums</h1>
        </div>
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1 form-group">
            <input
              type="text"
              placeholder="Filter"
              className="form-control"
              onChange={this.handleFilterChange}
            />
          </div>
        </div>
        <AlbumList albums={this.state.albums}/>
      </div>
    );
  }
});
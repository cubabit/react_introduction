"use strict";

var React = require('react');
var Album = require('./album');


module.exports = React.createClass({
  render: function() {
    var albumList = this.props.albums.map( function(album, index) {
      return (
        <div className="col-sm-4">
          <Album {...album} />
        </div>
      );
    } );

    if (!albumList.length) {
      return <h3>No matching albums</h3>;
    }

    var rowifiedAlbumList = [], rowLength = 3;

    for (var i = 0; i < albumList.length; i += rowLength) {
        var slice = albumList.slice(i, i + rowLength);

        rowifiedAlbumList.push(
          <div className="row">
            {slice}
          </div>
        );
    }

    return <div>{rowifiedAlbumList}</div>;
  }
});
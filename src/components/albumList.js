"use strict";

var React = require('react');
var Album = require('./album');


module.exports = React.createClass({
  render: function() {
    var albumList = this.props.albums.map( function(album) {
      return <div className="col-sm-4">
                <Album {...album} />
            </div>;
    } ); 
    
    return <div>{albumList}</div>;
  }
});
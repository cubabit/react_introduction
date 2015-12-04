"use strict";

var React = require('react');

module.exports = React.createClass({
  render: function() {
    var trackList = this.props.tracks.map( function(track, index) {
      return <tr>
        <th>{index + 1}</th>
        <td>{track.name}</td>
        <td>{track.duration}</td>
      </tr>;
    } );

    return <div className="thumbnail">
          <img src={this.props.image} alt={this.props.title} width="400" height="400" />
          <div className="caption">
            <h3>{this.props.title}</h3>
            <p>{this.props.description}</p>
            <table className="table table-striped">
              {trackList}
            </table>
          </div>
        </div>;
  }
});

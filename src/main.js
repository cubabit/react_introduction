"use strict";

var React = require('react');

var albums = [ {
  image: "http://a.espncdn.com/photo/2013/0204/jackson/3-1920X1920.jpg",
  title: "Thriller",
  description: "Micheal Jackson biggest album",
  tracks: [ {name: "Wanna Be Startin Somethin", duration: "6:03"}, {name: "Baby Be Mine", duration: "4:20"}, {name: "The Girl Is Mine", duration: "3:42"} ]
} ];

var Album = React.createClass({
  render: function() {
    var trackList = this.props.tracks.map( function(track) {
      return <tr>
        <th>1</th>
        <td>{track.name}</td>
        <td>{track.duration}</td>
      </tr>;

    } ); 
    return <div className="col-sm-4"> 
        <div className="thumbnail">
          <img src={this.props.image} alt={this.props.title} width="400" height="400" />
          <div className="caption">
            <h3>{this.props.title}</h3>
            <p>{this.props.description}</p>
            <table className="table table-striped">              
              {trackList}
            </table>
          </div>
        </div>
    </div>;
  }
});

React.render(<Album {...albums[0]} />, document.getElementById('app'));
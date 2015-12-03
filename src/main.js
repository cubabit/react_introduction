"use strict";

var React = require('react');


var Album = React.createClass({
  render: function() {
    return <div className="col-sm-4"> 
        <div className="thumbnail">
          <img src="http://a.espncdn.com/photo/2013/0204/jackson/3-1920X1920.jpg" alt="thriller" width="400" height="400" />
          <div className="caption">
            <h3>Thriller</h3>
            <p>Micheal Jackson biggest album</p>
            <table className="table table-striped">
              <tr><th>1</th><td>Wanna Be Startin Somethin</td><td>6:03</td></tr>
              <tr><th>2</th><td>Baby Be Mine</td><td>4:20</td></tr>
              <tr><th>3</th><td>The Girl Is Mine</td><td>3:42</td></tr>
            </table>
          </div>
        </div>
    </div>;
  }
});


React.render(<div><Album /><Album /></div>, document.getElementById('app'));
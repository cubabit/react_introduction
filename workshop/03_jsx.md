# JavaScript Extensions (JSX)

We currently have the following JavaScript:

```js
// src/main.js
"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var Header = React.createClass({
  displayName: "Header",

  render: function render() {

    return React.createElement(
      "div",
      { className: "page-header" },
      React.createElement(
        "h1",
        null,
        "Mix Tape ",
        React.createElement(
          "small",
          null,
          "classic 80s"
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(Header, null), document.getElementById('app'));
```

JSX provides an alternate way of specifying the react element(s). The example above looks like this in JSX:

```js
// src/main.js
"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var Header = React.createClass({
  displayName: "Header",

  render: function render() {

    return (
      <div className="page-header">
        <h1>Mix Tape <small>classic 80s</small></h1>
      </div>
    );
  }
});

ReactDOM.render(<Header />, document.getElementById('app'));
```
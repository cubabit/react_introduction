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

Using JSX we can embed "HTML" into the JavaScript. It is not really HTML, it is JSX which gets converted into JavaScript which react uses. 

Note that because this ends up in plain JavaScript we still can't use `class`, we need to use `className`. `for` is also a reserved word in JavaScript. Instead of using `for` use `htmlFor` when specifying labels.

Despite these small naming conflicts, JSX is the preferred way of creating react elements. We will use JSX in the remainder of this workshop.





# Props

At the moment we have hard coded the text in our header component. In order to make the header component more dynamic and reusable we could make use of `props`.

This would mean changint the code from this:

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

To this:

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
        <h1>{this.props.title} <small>classic 80s</small></h1>
      </div>
    );
  }
});

ReactDOM.render(<Header title="Mix Tape" />, document.getElementById('app')); 
```

The render method is now use the `props`. The `{` `}` is a way of mixing regular JavaScript with JSX (variable interpolation). The value for `this.props.title` is set in the last line of the example. 

## Using CommonJS modules
As we are using browserify, we can make use of the CommonJS pattern within the client side code. To do this create a new file in the `components` directory called `header.js` and add the following code to that file:

```js
// src/components/header.js
"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
  displayName: "Header",

  render: function render() {

    return (
      <div className="page-header">
        <h1>{this.props.title} <small>classic 80s</small></h1>
      </div>
    );
  }
});

``` 

Now adjust `main.js` so that it contains the following:

```js
// src/main.js
"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var Header = require('./components/header');

ReactDOM.render(<Header title="Mix Tape" />, document.getElementById('app'));
```

The web page should render as before. Using this module approach to client development is considered a scalable way of developing client side JavaScript code. 

## Exercise 

Change the Header component so that the sub-title is passed in via the `props` mechanism.
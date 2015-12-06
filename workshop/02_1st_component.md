# 1st Component

The objective of this section is to build a header component for the page. We will start by creating a component that simply displays "Mix Tape" on the page and we will build on that.


## Basic Component

First remove the "Mix Tape" content so that index.html has the following HTML:

```
<!-- src/index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>Mix Tape</title>
  <link rel="stylesheet" type="text/css" href="css/bundle.css">
</head>
<body>  
    <div id="app"></div>
    <script src="/scripts/bundle.js"></script>
</body>
</html>
```

We will be building the react component within `main.js`. To get the same behavior as before add the following to `main.js`

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
      null,
      "Mix Tape"
    );
  }
});

ReactDOM.render(<Header />, document.getElementById('app'));
```
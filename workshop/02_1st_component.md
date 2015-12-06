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

We will be building the react component within `main.js`. To get the "Mix Tape" content to display via react, add the following to `main.js`:

```js
// src/main.js
"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var Header = React.createClass({
  render: function render() {
    return React.createElement(
      "div",
      null,
      "Mix Tape"
    );
  }
});

ReactDOM.render(React.createElement(Header, null), document.getElementById('app'));
```

This code creates a react component. The first few lines include the react libraries. After this, we create a 'Header' component.

`React.createClass` creates a new React component - https://facebook.github.io/react/docs/top-level-api.html#react.createclass

A react component must implement the `render` function. This function must return a single child element, however that child can be composed of nested elements.

The `React.createElement` method creates a new react element. The docs describe the parameters to this method as follows:

```
ReactElement createElement(
  string/ReactClass type,
  [object props],
  [children ...]
)
```

The first parameter can be a string which matches a conventional html tag, or it can be a react component (e.g. a component created with `React.createClass`). Note that this method does not directly create html elements, it creates react elements which are added to reacts virtual DOM.

The second parameter (props) is a JavaScript object that allows us to pass through attributes (data) to the element. For example we could pass in a css class name and value pair, an example of this is given below. In this case we don't need any props so we use a null.

The third parameter is the 'markup' that should sit inside the element. In this case it is a simple string. If we wanted nested elements, we would need to use `React.createElement` again. The next example will cover nested elements.

`ReactDOM.render(React.createElement(Header, null), document.getElementById('app')); creates an element, with our custom component Header (as opposed to an html string). React will then replace the specified element (div with an id of 'app') with this element.

Docs for createElement - https://facebook.github.io/react/docs/top-level-api.html#react. 

### An example of nested elements

Next we create a nested element. Let's assume we want to end up with the following HTML on the page:

```html
<h1>Mix Tape <small>classic 80s</small></h1>
```

Then we would need to modify main.js to contain the following:

```js
// src/main.js
"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var Header = React.createClass({
  render: function render() {

    return React.createElement(
      "h1",
      null,
      "Mix Tape ",
      React.createElement(
        "small",
        null,
        "classic 80s"
      )
    );
  }
});

ReactDOM.render(React.createElement(Header, null), document.getElementById('app'));
```

Look at the first call to we see `createElement` with the `render` function. Notice the third parameter is actually a react element. In the second call to `createElement` the third parameter is a string (but technically it could have been another react element).


### Applying CSS

Let's create the JavaScript needed to generate the following HTML on the page:

```html
<div class="page-header">
  <h1>Mix Tape <small>classic 80s</small></h1>
</div>
```

To achieve this we would need the following JavaScript:


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

As you may have expected, there are now three react elements (div, h1, and small). The first call to `React.createElement` uses the second parameter (props) to pass in the class name. Ideally this would have the key of `class` to match CSS. However that can't be used as `class` is a reserved work in JavaScript.




















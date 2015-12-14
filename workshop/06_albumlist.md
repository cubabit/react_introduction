# Create a list of albums

React components are simply JavaScript objects. The React component you render can include other
React elements. If you need to do templating operations such as loops, simply call a function on the
object that returns React elements.

For example to render this array as an `<ul>`, you can call a function on the object that returns an
array of `<li>` elements.

```js
"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var itemList = [
  'Get shopping',
  'Put out rubbish',
  'Watch Breaking Bad'
];

var List = React.createClass({
  listElements: function () {
    return this.props.items.map(function (elem, index) {
      return (
        <li key={index}>{elem}</li>
      );
    });
  },

  render: function () {
    return (
      <ul>
        {this.listElements()}
      </ul>
    );
  }
});

ReactDOM.render(<List items={itemList} />, document.getElementById('app'));
```

Remember the `()`s as you are invoking the function! Also, note the *key* attribute; React warns if
you do supply this as it wants you to uniquely identify items that are repeated.

You can use this technique for the track-listings in the previous exercise if you hard-coded the
three tracks into the template.

Now, use the array below to make a list of albums. If you wrap the album in bootstrap *col* divs
then you may need to work out how to also include the *row* divs at appropriate points. Again,
simple JavaScript functions using array functions such as *slice* may help.

```js
var albumsData = [{
  image: "http://a.espncdn.com/photo/2013/0204/jackson/3-1920X1920.jpg",
  title: "Thriller",
  description: "Micheal Jackson biggest album",
  tracks: [{
    name: "Wanna Be Startin Somethin'",
    duration: "6:03"
  }, {
    name: "Baby Be Mine",
    duration: "4:20"
  }, {
    name: "The Girl Is Mine",
    duration: "3:42"
  }]
}, {
  image: "https://s3.amazonaws.com/images.sheetmusicdirect.com/Product/smd_132962/large.jpg",
  title: "Rio",
  description: "Duran Duran's biggest album",
  tracks: [{
    name: "Rio",
    duration: "3:36"
  }, {
    name: "My Own Way",
    duration: "4:20"
  }, {
    name: "Lonely In Your Nightmare",
    duration: "3:49"
  }]
}, {
  image: "http://classicrock.net/wp-content/uploads/2014/05/adam-and-the-ants.jpg",
  title: "Kings of the Wild Frontier",
  description: "Adam's biggest album",
  tracks: [{
    name: "Dog Eat Dog",
    duration: "3:36"
  }, {
    name: "'Antmusic'",
    duration: "4:20"
  }, {
    name: "Feed Me to the Lions",
    duration: "3:49"
  }]
}, {
  image: "http://www.rhino.com/sites/default/files/BrothersDireStraits.png",
  title: "Brothers in Arms",
  description: "Classic 80s rock from the Straits",
  tracks: [{
    name: "So Far Away",
    duration: "5:12"
  }, {
    name: "Money For Nothing",
    duration: "8:26"
  }, {
    name: "Walk Of Live",
    duration: "4:12"
  }]
}, {
  image: "https://images.rapgenius.com/6ecac4be30233f4383b95e704b0f7f39.800x800x1.jpg",
  title: "Slippery When Wet",
  description: "American pop rock",
  tracks: [{
    name: "Let it Rock",
    duration: "5:27"
  }, {
    name: "You Give Love a Bad Name",
    duration: "3:42"
  }, {
    name: "Livin' on a Prayer",
    duration: "4:09"
  }]
}, {
  image: "http://www.vintagevinyljournals.com/wp-content/uploads/2011/10/madonna-trueblue-cover.jpg",
  title: "True Blue",
  description: "Madonna's third album",
  tracks: [{
    name: "Papa Don't Preach",
    duration: "4:29"
  }, {
    name: "Open Your Heart",
    duration: "4:13"
  }, {
    name: "White Heat",
    duration: "4:40"
  }]
}];
```
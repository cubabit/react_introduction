"use strict";

var React = require('react');
var AlbumPage = require('./components/albumPage');

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

React.render(<AlbumPage albums={albumsData} />, document.getElementById('app'));
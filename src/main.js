"use strict";

var React = require('react');
var AlbumPage = require('./components/albumPage');

var albumsData = [ {
    image: "http://a.espncdn.com/photo/2013/0204/jackson/3-1920X1920.jpg",
    title: "Thriller",
    description: "Micheal Jackson biggest album",
    tracks: [ {name: "Wanna Be Startin Somethin", duration: "6:03"}, {name: "Baby Be Mine", duration: "4:20"}, {name: "The Girl Is Mine", duration: "3:42"} ]
  }, 
  {
    image: "https://s3.amazonaws.com/images.sheetmusicdirect.com/Product/smd_132962/large.jpg",
    title: "Rio",
    description: "Duran Duran's biggest album",
    tracks: [ {name: "Rio", duration: "3:36"}, {name: "My Own Way", duration: "4:20"}, {name: "Lonely In Your Nightmare", duration: "3:49"} ]
  }, 
  {
    image: "http://classicrock.net/wp-content/uploads/2014/05/adam-and-the-ants.jpg",
    title: "Kings of the Wild Frontier",
    description: "Adam's biggest album",
    tracks: [ {name: "Dog Eat Dog", duration: "3:36"}, {name: "'Antmusic'", duration: "4:20"}, {name: "Feed Me to the Lions", duration: "3:49"} ]
  } ];

React.render(<AlbumPage albums={albumsData} />, document.getElementById('app'));
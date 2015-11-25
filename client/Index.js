var React = require('react');
var GitBox = require('./GitData');
var Home = require('./Home');
var WakaBox = require('./WakaBox');

React.render(<Home/>, document.getElementById('index'));
React.render(<GitBox />, document.getElementById('github'));
React.render(<WakaBox />, document.getElementById('wakatime'));
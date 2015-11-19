var React = require('react');
var GitBox = require('./GitData');
var Home = require('./Home');

React.render(<Home/>, document.getElementById('index'));
React.render(<GitBox  />, document.getElementById('github'));


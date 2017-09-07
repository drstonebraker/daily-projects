const Snake = require('./snake');

function Board (size) {
  this.snake = new Snake(this);
  this.apples = [];
  this.size = size;
}

Board.constructGrid = function(size) {

};

module.exports = Board;

const Board = require('./board');

function View($container) {
  this.$container = $container;
  this.board = new Board();
}

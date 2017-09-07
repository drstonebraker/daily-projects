function Snake (board) {
  this.direction = 'N';
  this.segments = [[15,15]];
  this.hasEaten = false;
  this.board = board;
}

Snake.prototype.updateHasEaten = function(nextPos) {
  if (this.board.apples.includes(nextPos)) {
    this.hasEaten = true;
    const appleIdx = this.board.apples.indexOf(nextPos);
    this.board.apples.splice(appleIdx, 1);
  }
};

Snake.prototype.move = function() {
  const nextPos = this.getNextPos();
  if (this.isWall(nextPos)) {
    alert('gg');
  } else {
    if (!this.hasEaten) {
      this.segments.pop();
    }

    this.segments.unshift(nextPos);
    this.hasEaten = false;    
  }
};

Snake.prototype.turn = function (newDirection) {
  if (!Snake.coordHelpers.isOpposite(this.direction,newDirection)) {
    this.direction = newDirection;
  }
};

Snake.DIRECTIONS = {
  'N': [-1, 0],
  'E': [ 0, 1],
  'S': [ 1, 0],
  'W': [ 0,-1]
};

Snake.prototype.getNextPos = function () {
  const head = this.segments[0];
  const delta = Snake.DIRECTIONS[this.direction];
  return [head[0] + delta[0], head[1] + delta[1]];
};

Snake.prototype.isWall = function (pos) {
  return pos.some((coord) => {
    if (coord < 0 || coord >= this.board.size) {
      return true;
    }
    return false;
  });
};

Snake.coordHelpers = {
  isOpposite(dir1, dir2) {
    if (dir1[0] + dir2[0] === 0) {
      return true;
    }
    return false;
  }
};

module.exports = Snake;

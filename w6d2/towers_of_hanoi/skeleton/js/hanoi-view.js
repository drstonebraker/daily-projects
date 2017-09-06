function View (game, $container) {
  this.game = game;
  this.$container = $container;
  this.discs = View.createDiscs();
  this.setupTowers();

  this.$fromTower = null;
}

View.createDiscs = function() {
  let holder = [];
  for (let i = 1; i < 4; i++) {
    let $disc = $('<li>')
      .addClass('disc')
      .data('size', i)
      .css({
        width: `${33.33 * i}%`
      });
    holder.push($disc);
  }
  return holder;
};

View.prototype.setupTowers = function () {
  let towerIdx = 0;
  this.game.towers.forEach((tower) => {
    let $tower = $('<ul>')
      .addClass("tower")
      .attr('id', `tower${towerIdx}`)
      .data('towerIdx', towerIdx);

    for (var i = 0; i < tower.length; i++) {
      $tower.prepend(this.discs[tower[i] - 1]);
    }

    this.$container.append($tower);
    towerIdx++;
  });
  $('.tower').on('click', this.handleClickTower.bind(this));
};

View.prototype.render = function () {
  this.$container.empty();
  this.setupTowers();
  if (this.game.isWon()) {
    alert('Congratulations on your stunning victory');
  }
};

View.prototype.handleClickTower = function (e) {

  if (this.$fromTower === null) {
    this.$fromTower = $(e.currentTarget);
    this.$fromTower.addClass('selected');
  } else {
    const $toTower = $(e.currentTarget);
    const fromTowerIdx = this.$fromTower.data('towerIdx');
    const toTowerIdx = $toTower.data('towerIdx');
    if (this.game.isValidMove(fromTowerIdx,toTowerIdx)) {
      this.game.move(fromTowerIdx,toTowerIdx);
      this.render();
    } else {
      alert('Invalid move');
    }
    this.$fromTower.removeClass('selected');
    this.$fromTower = null;
  }
};



module.exports = View;

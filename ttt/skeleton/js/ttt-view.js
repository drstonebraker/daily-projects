class View {
  constructor(game, $el) {
    this.game = game;
    this.$container = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $('.square').on('click', (e) => this.makeMove($(e.currentTarget)));
  }

  makeMove($square) {
    if ($square.text() === '') {
      $square.addClass('white');
      $square.text(this.game.currentPlayer);
      this.game.playMove($square.data('pos'));
    } else {
      alert('That\'s not a valid move');
    }

    if (this.game.isOver()) {
      setTimeout(() => {
        this.game.swapTurn();
        alert('game is over, won by: ' + this.game.currentPlayer);
      }
      );
    }

  }

  setupBoard() {
    const $ul = $('<ul class="square-container cfix"></ul>');
    for (let i = 0; i < 9; i++) {
      let $li = $(`<li class="square" id="li${i}"></li>`);
      let row = Math.floor(i / 3);
      let col = i % 3;

      $li.data('pos', [row,col]);

      $ul.append($li);

    }
    this.$container.append($ul);
  }
}

module.exports = View;

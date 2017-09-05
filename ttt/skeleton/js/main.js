const View = require('./ttt-view');
const Game = require('../../solution/game');

$( () => {
  const game = new Game();
  const $ttt = $('#ttt');
  const view = new View(game, $ttt);
});

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const HanoiGame = __webpack_require__(1);
const HanoiView = __webpack_require__(2);

$( () => {
  const rootEl = $('.hanoi');
  const game = new HanoiGame();
  new HanoiView(game, rootEl);
  console.log('YOLO');
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class Game {
  constructor() {
    this.towers = [[3, 2, 1], [], []];
  }

  isValidMove(startTowerIdx, endTowerIdx) {
      const startTower = this.towers[startTowerIdx];
      const endTower = this.towers[endTowerIdx];

      if (startTower.length === 0) {
        return false;
      } else if (endTower.length == 0) {
        return true;
      } else {
        const topStartDisc = startTower[startTower.length - 1];
        const topEndDisc = endTower[endTower.length - 1];
        return topStartDisc < topEndDisc;
      }
  }

  isWon() {
      // move all the discs to the last or second tower
      return (this.towers[2].length == 3) || (this.towers[1].length == 3);
  }

  move(startTowerIdx, endTowerIdx) {
      if (this.isValidMove(startTowerIdx, endTowerIdx)) {
        this.towers[endTowerIdx].push(this.towers[startTowerIdx].pop());
        return true;
      } else {
        return false;
      }
  }

  print() {
      console.log(JSON.stringify(this.towers));
  }

  promptMove(reader, callback) {
      this.print();
      reader.question("Enter a starting tower: ", start => {
        const startTowerIdx = parseInt(start);
        reader.question("Enter an ending tower: ", end => {
          const endTowerIdx = parseInt(end);
          callback(startTowerIdx, endTowerIdx)
        });
      });
  }

  run(reader, gameCompletionCallback) {
      this.promptMove(reader, (startTowerIdx, endTowerIdx) => {
        if (!this.move(startTowerIdx, endTowerIdx)) {
          console.log("Invalid move!");
        }

        if (!this.isWon()) {
          // Continue to play!
          this.run(reader, gameCompletionCallback);
        } else {
          this.print();
          console.log("You win!");
          gameCompletionCallback();
        }
      });
  }
}

module.exports = Game;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

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


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
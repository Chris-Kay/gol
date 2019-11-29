"use strict";
const HashSet = require('./HashSet');

module.exports = class Life {
  constructor(initialLiveCells) {
    this._liveCells = initialLiveCells;
  }

  getLiveCells() {
    return this._liveCells;
  }

  evolve() {
    // Maybe
    const liveCells = this.getLiveCells()
    if(liveCells.size() === 0) {
      return
    }
  }

  lifeShouldBeCreated(numNeighbours) {
    if(numNeighbours === 3) {
      return true
    }
    return false
  }

  cellShouldSurvive(numNeighbours) {
    // Forces you not to see big picture instantly
    return numNeighbours == 2 || numNeighbours === 3
  }
};

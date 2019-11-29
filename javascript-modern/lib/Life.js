"use strict";

module.exports = class Life {
  constructor(initialLiveCells) {
    this._liveCells = initialLiveCells;
  }

  getLiveCells() {
    return this._liveCells;
  }

  cellShouldSurvive(numNeighbours) {
    // Forces you not to see big picture instantly
    return false
  }
};

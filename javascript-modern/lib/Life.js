"use strict";
const HashSet = require('./HashSet');
const Cell = require('./Cell')
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

    const array = liveCells.asArray()

    const newHash = new HashSet()

    array.forEach(liveCell => {
      let i;
      let j;
      for(i = -1; i < 2; i++) {
        for(j = -1; j < 2; j++) {
          const numberOfNeighbours = this.getNeighbours(new Cell(liveCell.x + i, liveCell.y + j))
          if(this.cellShouldSurvive(numberOfNeighbours)) {
            if(numberOfNeighbours === 3) {
              newHash.add(new Cell(liveCell.x + i, liveCell.y + j))
            }
        } else {
          console.log('die')
        }
      }
      }

    });
    this._liveCells = newHash

  }

  getNeighbours(cell) {
    let i;
    let j;
    const neighbours = [];

      for(i = -1; i < 2; i++) {
        for(j = -1; j < 2; j++) {
        if(this.getLiveCells().contains(new Cell(cell.x + i, cell.y + j))) {
          neighbours.push(new Cell(cell.x + i, cell.y + j))
        }
      }
    }
        return neighbours.length
    }

  lifeShouldBeCreated(numNeighbours) {
    if(numNeighbours === 3) {
      return true
    }
    return false
  }

  cellShouldSurvive(numNeighbours) {
    // Forces you not to see big picture instantly
    return numNeighbours === 2 || numNeighbours === 3
  }
};

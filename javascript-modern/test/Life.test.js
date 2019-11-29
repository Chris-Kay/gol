"use strict";

const expect = require("chai").expect;

const Cell = require("../lib/Cell");
const HashSet = require("../lib/HashSet");
const Life = require("../lib/Life");

describe("Life Tests", function () {
  describe("Initialisation", function () {
    it("create a set with the correct number of cells", function () {
      const setOfCells = new HashSet();
      setOfCells.add(new Cell(1, 1));
      setOfCells.add(new Cell(2, 2));

      const life = new Life(setOfCells);
      expect(life.getLiveCells().size()).to.equal(2);
    });
  });

  describe("Underpopulation", function () {
    it("die if less than two neighbours", function () {
      const life = new Life(new HashSet());
      expect(life.cellShouldSurvive(0)).to.equal(false);
      expect(life.cellShouldSurvive(1)).to.equal(false);
    });
  });
});

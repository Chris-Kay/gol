var expect = require('chai').expect;
var Life = require('../src/life');
var HashSet = require('../src/hashset');
var Cell = require('../src/cell');

describe("Life Tests", function() {

	describe("Initialisation", function() {
		it("create a set with the correct number of cells", function() {
			var setOfCells = new HashSet();
			setOfCells.add(new Cell(1,1));
			setOfCells.add(new Cell(2,2));
		
			var life = new Life(setOfCells);
			expect(life.getLiveCells().size()).to.equal(2);
		});
	});
	
	describe("Underpopulation", function() {
		it("should ???", function() {
			var setOfCells = new HashSet();
			setOfCells.add(new Cell(1,1));
			setOfCells.add(new Cell(2,2));
		
			var life = new Life(setOfCells);
			expect(life.cellShouldSurvive(0)).to.equal(false);
			expect(life.cellShouldSurvive(1)).to.equal(false);
		});
	});
});
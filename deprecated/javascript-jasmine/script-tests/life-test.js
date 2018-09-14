/**
 * Jasmine unit tests for Life in the Game of Life.
 */
/* global Life:false, HashSet:false, Cell:false */
describe("Life Tests", function() {
	
	var life;
	
	beforeEach(function() {
		var setOfCells = new HashSet();
		setOfCells.add(new Cell(1,1));
		setOfCells.add(new Cell(2,2));
		
		life = new Life(setOfCells);
	});
	
	describe("Initialisation", function() {
		it("create a set with the correct number of cells", function() {
			expect(life.getLiveCells().size()).toBe(2);
		});
	});
	
	describe("Underpopulation", function() {
		it("should ???", function() {
			expect(life.cellShouldSurvive(0)).toBe(false);
			expect(life.cellShouldSurvive(1)).toBe(false);
		});
	});
});
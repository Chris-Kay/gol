using System.Collections.Generic;
using GameOfLife;
using Xunit;

namespace GameOfLifeTests
{
    public class LifeTests
    {
        [Fact]
        public void TestCanInitializeWithArrayOfCells()
        {
            Cell c1 = new Cell(1, 3);
            Cell c2 = new Cell(1, 3);

            var initialState = new HashSet<Cell> { c1, c2 };

            Life life = new Life(initialState);
            Assert.Equal(life.GetLiveCells(), initialState);
        }

        [Fact]
        public void TestUnderPopulation()
        {
            Assert.False(Life.CellShouldSurvive(0));
            Assert.False(Life.CellShouldSurvive(1));
        }
    }
}

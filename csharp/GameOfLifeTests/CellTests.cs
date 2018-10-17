using GameOfLife;
using Xunit;

namespace GameOfLifeTests
{
    public class CellTests
    {
        [Fact]
        public void TestCanIdentifyTwoIdenticalCells()
        {
            Cell c1 = new Cell(1, 3);
            Cell c2 = new Cell(1, 3);

            Assert.True(c1.EqualTo(c2));
        }

        [Fact]
        public void TestCanIdentifyTwoDifferentCells()
        {
            Cell c1 = new Cell(1, 3);
            Cell c2 = new Cell(1, 4);

            Assert.False(c1.EqualTo(c2));
        }
    }
}

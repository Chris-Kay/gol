using GameOfLife;
using Xunit;

namespace GameOfLifeTests
{
    public class CellTests
    {
        [Fact]
        public void TestCanIdentifyTwoIdenticalCells()
        {
            var c1 = new Cell(1, 3);
            var c2 = new Cell(1, 3);

            Assert.True(c1.Equals(c2));
        }

        [Fact]
        public void TestCanIdentifyTwoDifferentCells()
        {
            var c1 = new Cell(1, 3);
            var c2 = new Cell(1, 4);

            Assert.False(c1.Equals(c2));
        }
    }
}

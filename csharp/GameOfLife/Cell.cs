using System;

namespace GameOfLife
{
    public class Cell
    {
        private readonly int x;
        private readonly int y;

        public Cell(int xCoord, int yCoord)
        {
            this.x = xCoord;
            this.y = yCoord;
        }

        public override int GetHashCode()
        {
            return 31 * 31 * this.x + 31 * this.y;
        }

        public override bool Equals(object obj)
        {
            var other = (Cell)obj;
            return (this.x == other.x) && (this.y == other.y);
        }
    }
}

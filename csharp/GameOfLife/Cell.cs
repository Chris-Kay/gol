using System;

namespace GameOfLife
{
    public class Cell
    {
        public int X { get; set; }
        public int Y { get; set; }

        public Cell(int xCoord, int yCoord)
        {
            this.X = xCoord;
            this.Y = yCoord;
        }

        public bool EqualTo(Cell other) 
        {
            return (this.X == other.X) && (this.Y == other.Y);
        }
    }
}

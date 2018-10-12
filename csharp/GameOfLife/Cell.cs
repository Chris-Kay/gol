using System;

namespace GameOfLife
{
    public class Cell
    {
        int x;
        int y;

    public Cell(int xCoord, int yCoord)
    {
        this.x = xCoord;
        this.y = yCoord;
    }

        public bool equalTo(Cell other) {
            return (this.x == other.x) && (this.y == other.y);
        }
    }
}

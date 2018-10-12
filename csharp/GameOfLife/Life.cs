using System;
namespace GameOfLife
{

    public class Life
    {
        public Cell[] state;
        public Life(Cell[] initialState)
        {
            this.state = initialState;
        }

        public static bool CellShouldSurvive(int numNeighbours) {
            throw new NotImplementedException();
        }
    }
}

using System;
namespace GameOfLife
{
    public class Life
    {
        public Cell[] State { get; set; }

        public Life(Cell[] initialState)
        {
            this.State = initialState;
        }

        public static bool CellShouldSurvive(int numNeighbours) 
        {
            throw new NotImplementedException();
        }
    }
}

using System;
using System.Collections.Generic;

namespace GameOfLife
{
    public class Life
    {
        private readonly HashSet<Cell> liveCells;

        public Life(HashSet<Cell> initialLiveCells)
        {
            this.liveCells = initialLiveCells;
        }

        public HashSet<Cell> GetLiveCells()
        {
            return this.liveCells;
        }

        public static bool CellShouldSurvive(int numNeighbours) 
        {
            throw new NotImplementedException();
        }
    }
}

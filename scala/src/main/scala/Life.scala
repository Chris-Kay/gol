class Life(liveCells: Set[Cell]) {
  def getLiveCells: Set[Cell] = {
    liveCells
  }

  def cellShouldSurvive(numNeighbours: Int): Boolean = ???
}
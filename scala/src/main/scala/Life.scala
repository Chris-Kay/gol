import scala.collection.mutable.HashSet

class Life {
  private var liveCells: HashSet[Cell] = null

  def this(initialLiveCells: HashSet[Cell]) {
    this()
    this.liveCells = initialLiveCells
  }

  def getLiveCells: HashSet[Cell] = {
    return this.liveCells
  }

  def cellShouldSurvive(numNeighbours: Int): Boolean = {
    throw new UnsupportedOperationException
  }
}
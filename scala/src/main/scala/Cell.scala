
class Cell {
  private var x: Int = 0
  private var y: Int = 0

  def this(x: Int, y: Int) {
    this()
    this.x = x
    this.y = y
  }

  override def hashCode: Int = {
    return 31 * 31 * x + 31 * y
  }

  override def equals(other: Any): Boolean = {
    val otherCell: Cell = other.asInstanceOf[Cell]
    return otherCell.x == x && otherCell.y == y
  }
}
import org.scalatest.{FunSpec, Matchers}
import scala.collection.mutable.HashSet

class CellSpec extends FunSpec with Matchers {

  describe("Equality") {
    it("cells with the same x and y coordinates should be equal") {
      var c1: Cell = new Cell(1, 2)
      var c2: Cell = new Cell(1, 2)

      c1.equals(c2) shouldBe true
    }
  }

  describe("Inequality") {
    it("cells with different x and y coordinates should not be equal") {
      var c1: Cell = new Cell(1, 2)
      var c2: Cell = new Cell(1, 3)
      c1.equals(c2) shouldBe false

      c1 = new Cell(0, 2)
      c2 = new Cell(1, 2)
      c1.equals(c2) shouldBe false
    }
  }

  describe("Hash of Cells") {
    it("multiple cells with the same x and y coordinates should not exist") {
      new Cell(1,1).hashCode shouldEqual new Cell(1,1).hashCode

      val set: HashSet[Cell] = new HashSet[Cell]
      set.add(new Cell(1, 1))
      set.add(new Cell(1, 1))
      set.add(new Cell(2, 2))

      set.size shouldEqual 2
    }
  }

  describe("Equivalent Set of Cells") {
    it("two sets of cells containing cells with the x and y coordinates should be equal") {
      val setOfCells: HashSet[Cell] = new HashSet[Cell]
      setOfCells.add(new Cell(1, 1))
      val setOfCells2: HashSet[Cell] = new HashSet[Cell]
      setOfCells2.add(new Cell(1, 1))
      setOfCells shouldEqual setOfCells2
    }
  }

}

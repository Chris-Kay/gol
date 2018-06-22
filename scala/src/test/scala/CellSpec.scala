import org.scalatest.{FunSpec, Matchers}

class CellSpec extends FunSpec with Matchers {

  describe("Equality") {
    it("""cells with the same x and y coordinates should be equal""") {
      val c1: Cell = Cell(1, 2)
      val c2: Cell = Cell(1, 2)

      c1.equals(c2) shouldBe true
    }
  }

  describe("Inequality") {
    it("cells with different x and y coordinates should not be equal") {
      val c1: Cell = Cell(1, 2)
      val c2: Cell = Cell(1, 3)
      c1.equals(c2) shouldBe false

      val c3 = Cell(0, 2)
      val c4 = Cell(1, 2)
      c3.equals(c4) shouldBe false
    }
  }

  describe("Hash of Cells") {
    it("multiple cells with the same x and y coordinates should not exist") {
      Cell(1, 1).hashCode shouldEqual Cell(1, 1).hashCode

      val set = Set(Cell(1, 1), Cell(1, 1), Cell(2, 2))

      set.size shouldEqual 2
    }
  }

  describe("Equivalent Set of Cells") {
    it("two sets of cells containing cells with the x and y coordinates should be equal") {
      val setOfCells = Set(Cell(1, 1))
      val setOfCells2 = Set(Cell(1, 1))

      setOfCells shouldEqual setOfCells2
    }
  }
}

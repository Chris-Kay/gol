import org.scalatest.{FunSpec, Matchers}

class LifeSpec extends FunSpec with Matchers {
  describe("Initialisation") {
    it("creates a set with the correct number of cells") {
      val setOfCells = Set(Cell(1,1), Cell(2 ,2))
      val life = new Life(setOfCells)

      life.getLiveCells.size shouldEqual 2
    }
  }

  describe("Underpopulation") {
    it("?????") {
      val setOfCells = Set(Cell(1,1), Cell(2 ,2))
      val life = new Life(setOfCells)

      life.cellShouldSurvive(0) shouldBe false
      life.cellShouldSurvive(1) shouldBe false
    }
  }
}

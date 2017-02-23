
import org.scalatest.{FunSpec, Matchers}
import scala.collection.mutable.HashSet


class LifeSpec extends FunSpec with Matchers {

  describe("Initialisation") {
    it("creates a set with the correct number of cells") {
      val setOfCells: HashSet[Cell] = new HashSet[Cell]
      setOfCells.add(new Cell(1, 1))
      setOfCells.add(new Cell(2, 2))
      val life = new Life(setOfCells)

      life.getLiveCells.size shouldEqual 2
    }
  }

  describe("Underpopulation") {
    it("?????") {
      val setOfCells: HashSet[Cell] = new HashSet[Cell]
      setOfCells.add(new Cell(1, 1))
      setOfCells.add(new Cell(2, 2))
      val life = new Life(setOfCells)

      life.cellShouldSurvive(0) shouldBe false
      life.cellShouldSurvive(1) shouldBe false
    }
  }
}

from gol import Cell
import mock
import unittest

class CellTests(unittest.TestCase):
    def test_equality(self):
        cell = Cell(1,2)
        another_cell = Cell(1,2)

        self.assertTrue(cell == another_cell, "Should have returned true for cells of the same location.")

    def test_inequality(self):
        cell = Cell(2,1)
        another_cell = Cell(1,2)

        self.assertFalse(cell == another_cell, "Should have returned false for cells at a different location.")

    def test_set_equality(self):
        cells = set([Cell(1,2), Cell(1,3)])

        self.assertTrue(Cell(1,2) in cells, "Should have returned true as Cell(1,2) is in the cells set.")
        self.assertTrue(Cell(1,3) in cells, "Should have returned true as Cell(1,3) is in the cells set.")
        self.assertFalse(Cell(2,1) in cells, "Should have returned false as Cell(2,1) is not in the cells set.")
